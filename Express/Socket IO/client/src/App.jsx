import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {io} from "socket.io-client"

function App() {

  const [socketId, setSocketId] = useState("");
  const [room, setRoom] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  /* const socket = useMemo(()=>{(
    io("http://localhost:3000",
    {
      withCredentials : true
    }))
  }, []) */

  const sendMessage = (e)=>{
    e.preventDefault();
    socket.emit("message", {message, room});
    setMessage("");
  }

  const joinRoomHandler = (e)=>{
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoomName("");
  }

  useEffect(()=>{
    const newSocket = io("http://localhost:3000", {withCredentials: true});
    setSocket(newSocket);

    return ()=>newSocket.disconnect();
  }, [])

  useEffect(()=>{

    if (!socket) return;
    
    socket.on("connect", ()=>{
      setSocketId(socket.id);
      console.log(`User with id ${socket.id} connected!`);
    })

    socket.on("receive-message", (data)=>{
      console.log(data);
      setMessages((messages)=>[...messages, data]);
    });

    socket.on("welcome", (s)=>{
      console.log(s);
    })

    return ()=>socket.disconnect();
  }, [socket]);

  return (
    <>
      <h1>Socket ID: {socketId}</h1>
      <form className="room-info-container" onSubmit={joinRoomHandler}>
        <div>
          <input type="text" value={roomName} onChange={(e)=>setRoomName(e.target.value)}/>
        </div>
        <button type="submit">Change Room</button>
      </form>

      <form className='message-sending-container' onSubmit={sendMessage}>
        <div>
          Message
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div>
          Room
          <input type="text" value={room} onChange={(e)=>setRoom(e.target.value)}/>
        </div>
        <button type="submit">Send</button>
      </form>

      <div className="message-container" style={{backgroundColor: "red"}}>
        {messages.map((element, index)=> <div>
          <b>Message No. {index}: </b>
          <p>{element}</p>
        </div>)}
      </div>
    </>
  )
}

export default App
