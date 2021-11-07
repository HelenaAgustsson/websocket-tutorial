const path=require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//run when a user connects
io.on('connection', socket =>{
    //socket.emit -> to the client
    socket.emit('message','Welcome to chat!')
    // socket.broadcast.emit -> everyone except the client
    socket.broadcast.emit('message', 'A user has joined the chat');
    // io.emit -> everybody
    socket.on('disconnect', ()=> {
        io.emit('message', 'A user has left the chat');
    })
    //listen for chatmessage
    socket.on('chatMessage', msg=>{
        io.emit('message', msg)
    })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log('server running'));