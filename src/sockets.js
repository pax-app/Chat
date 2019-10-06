export default function(io) {
  io.on('connection', socket => {
    let user_room = -1;

    socket.on('join', room => {
      socket.join(room);
      user_room = room;
    });

    socket.on('text-message', message => {
      io.to(user_room).emit('message', `${socket.id}: ${message}`);
    });
  });
}
