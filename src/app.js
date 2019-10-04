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

let counter = 0;

io.on('connection', socket => {
  console.log(`Connection [${socket.id}] counter is : ${counter}`);

  socket.on('increment_counter', () => {
    counter += 1;
    console.log(`Connection [${socket.id}] counter is : ${counter}`);
  });
});

raw_server.listen(port, () => console.log(`Server is up on port ${port}`));
