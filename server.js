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
io.on('connection', (socket)=>{
    console.log('New ws connection...');
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log('server running'));