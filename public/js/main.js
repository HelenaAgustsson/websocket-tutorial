const chatForm = document.getElementById('chat-form');

const socket = io();

socket.on('message', message=>{
    console.log(message);
})

//mesage submit

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    //emit msg to server
    socket.emit('chatMessage', msg);
})