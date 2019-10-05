import path from 'path';
import http from 'http';
import express from 'express';
import socketio from 'socket.io';

const app = express();
const raw_server = http.createServer(app);
const io = socketio(raw_server);

const port = process.env.PORT || 3001;
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

io.on('connection', socket => {
  let user_room = -1;

  socket.on('join', room => {
    socket.join(room);
    user_room = room;
    console.log(user_room);
  });

  // socket.broadcast.emit('message', `The user ${socket.id} entered`);

  socket.on('text-message', message => {
    console.log(message, user_room);

    io.to(user_room).emit('message', `${socket.id}: ${message}`);
  });
});

raw_server.listen(port, () => console.log(`Server running at port ${port}`));
