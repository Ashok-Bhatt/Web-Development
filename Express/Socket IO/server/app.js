const express = require('express');
const {Server} = require('socket.io');
const {createServer} = require('http');
const cors = require('cors');

const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors : {
        origin : 'http://localhost:5173',
        methods : ['GET', 'POST'],
        credentials : true
    }
});

app.use(
    cors( {
        origin : 'http://localhost:5173',
        methods : ['GET', 'POST'],
        credentials : true
    })
)

app.get("/", (req, res) => {
    res.send("hello world");
})

io.on("connection", (socket)=>{
    console.log(`user with socket id ${socket.id} connected`);

    socket.on("message", ({message, room})=>{
        console.log(room, message);
        socket.to(room).emit("receive-message", message);
    })

    socket.on("join-room", (room)=>{
        socket.join(room);
        socket.to(room).emit("welcome", `User with socket Id ${socket.id} joined!`);
        console.log(`User joined to room : ${room}`);
    })

    socket.on("disconnect", ()=>{
        console.log(`User with ${socket.id} disconnected`);
    })
})

server.listen(port, ()=>{
    console.log(`Listening on ${port}`)
});