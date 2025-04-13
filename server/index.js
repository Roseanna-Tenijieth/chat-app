import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import session from "express-session"
import cookieParser from "cookie-parser"
import passport from "passport"
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import "./strategies/jwtStrategy.js" // Passport JWT strategy
import "./strategies/localStrategy.js" // Passport local strategy
import authRouter from "./auth/index.js"
import userRouter from "./user/userIndex.js"

const port = process.env.PORT || 8000
const cookieSecret = process.env.COOKIE_SECRET || "secret"
const sessionSecret = process.env.SESSION_SECRET || "secret"

const app = express()
app.use(express.json())
app.use(cookieParser(cookieSecret))

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.WHITELISTED_DOMAINS, //works for only one domain
    methods: ["GET", "POST"]
  }
})

// Express CORS
// Get whitelisted domains from env
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []
// Set CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
    else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true
}
// Use CORS
app.use(cors(corsOptions))

// Sessions, default
app.use(session({}))

// Add Passport
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRouter)
app.use("/users", userRouter)

app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    data: '404'
  })
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
  }) 
})

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Chat App connected to database ${mongoURL}`)

  server.listen(port, () => {
    console.log(`Chat App listening on port ${port}`)
  })
}
catch (err) {
  console.log(err)
} 
