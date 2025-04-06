const express = require('express');
const {Socket} = require(Socket.io);
const http = require('http');

const app = express()
const server = http.createServer(app)
const io = new Socket(server);

io.on('connection', (socket)=>{
    console.log('user is connected', socket.id)
    socket.on('chat message',(msg)=>{
        io.emit('chat messahe',msg)
    })
    io.on('disconnect', ()=>{
        console.log("connection is disconnected")
    })
})


app.listen(6100, ()=>{
    console.log("server is running on port 6100")
})