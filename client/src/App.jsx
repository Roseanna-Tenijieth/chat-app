import { useState, useEffect } from "react"
import { Routes, Route } from "react-router"
import { socket } from './socket'
import PrivateRoute from "./PrivateRoute"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Login from "./Login"
import NoMatch from "./NoMatch"
import "./App.css"

function App() {
  const [ isConnected, setIsConnected ] = useState(socket.connected)
  const [ fooEvents, setFooEvents ] = useState([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
