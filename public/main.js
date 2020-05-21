// Make connection
const socket = io.connect('http://localhost:4000');

// query dom

const form = document.getElementById('chat-form');
const username = document.getElementById('username');
const message = document.getElementById('message');
const outputBox = document.getElementById('output');

// handle sending message
form.addEventListener('submit', e => {
  e.preventDefault();
  socket.emit('chat', {
    message: message.value,
    username: username.value
  });

  message.value = '';
});

// listen for events
socket.on('chat', data => {
  outputBox.innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`
})