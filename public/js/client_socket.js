const socket = io('http://localhost:3001');

socket.on('message', message => {
  console.log(message);
});

const form = document.getElementById('form');
const btn_send = document.getElementById('btn-send');
const msg_input = document.getElementById('msg-input');

form.addEventListener('submit', e => {
  e.preventDefault();
  socket.emit('text-message', msg_input.value);
  msg_input.value = '';
});
