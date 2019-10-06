import path from 'path';
import http from 'http';
import express from 'express';
import socketio from 'socket.io';
import routes from './routes';

import './database';

const app = express();
const raw_server = http.createServer(app);
const io = socketio(raw_server);

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(routes);

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

const port = process.env.PORT || 3001;
raw_server.listen(port, () => console.log(`Server running at port ${port}`));
