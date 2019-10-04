const socket = io('http://localhost:3001');

socket.on('send-message', message => {
  console.log(message);
});

const btn_increment = document.getElementById('btn-increment');

btn_increment.addEventListener('click', event => {
  event.preventDefault();
  socket.emit('increment_counter');
});
