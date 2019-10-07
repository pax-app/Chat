import { format } from 'date-fns';

const fetch = require('node-fetch');

export default function(io) {
  io.on('connection', socket => {
    let user_room = -1;

    socket.on('join', room => {
      socket.join(room);
      user_room = room;
    });

    socket.on('text-message', async msg => {
      const date = format(new Date(), 'yyyy-MM-dd hh:mm:ss');

      fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: msg.sender,
          date_time_sent: date,
          text_message: msg.text,
          chat_id: msg.chat_id,
        }),
      })
        .then(res => res.json())
        .then(data => io.to(user_room).emit('message', data.text_message));
    });
  });
}
