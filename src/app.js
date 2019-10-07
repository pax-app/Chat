import path from 'path';
import http from 'http';
import Youch from 'youch';
import express from 'express';
import socketio from 'socket.io';
import 'express-async-errors';

import * as Sentry from '@sentry/node';
import sentryConfig from './config/sentry';

import routes from './routes';
import sockets from './sockets';
import './database';

const app = express();
const raw_server = http.createServer(app);
const io = socketio(raw_server);

Sentry.init(sentryConfig);
app.use(Sentry.Handlers.requestHandler());

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(routes);
sockets(io);
app.use(Sentry.Handlers.errorHandler());

const node_env = process.env.NODE_ENV || 'development';

app.use(async (error, req, res, next) => {
  if (node_env === 'development') {
    const errors = await new Youch(error, req).toJSON();
    return res.status(500).json(errors);
  }
  return res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3001;
raw_server.listen(port, () => console.log(`Server running at port ${port}`));
