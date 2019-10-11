const form = document.getElementById('form');
const btn_send = document.getElementById('btn-send');
const msg_input = document.getElementById('msg-input');

const room_1 = document.getElementById('room-1');
const room_2 = document.getElementById('room-2');

const socket = io('localhost:3001');

socket.on('message', message => {
  console.log(message);
});

room_1.addEventListener('click', () => {
  socket.emit('join', 1);
});
room_2.addEventListener('click', () => {
  socket.emit('join', 2);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  socket.emit('text-message', {
    chat_id: 2,
    text: msg_input.value,
    sender: 'U',
  });
  msg_input.value = '';
});
