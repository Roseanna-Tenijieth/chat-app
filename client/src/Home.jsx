import io from 'socket.io-client'

const Home = () => {
  const socket = io(import.meta.env.VITE_API_SERVER_URL)
  
  const handleMessage = () => {
    console.log('handleMessage')
    socket.emit('chat message', 'hard-coded message')
  }
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={handleMessage}
        type='button'>
          Send Message
        </button>
    </div>
  )
}

export default Home