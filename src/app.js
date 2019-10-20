import Youch from 'youch';
import express from 'express';
import 'express-async-errors';

import * as Sentry from '@sentry/node';
import sentryConfig from './config/sentry';

import routes from './routes';
import './database';

const app = express();

Sentry.init(sentryConfig);
app.use(Sentry.Handlers.requestHandler());

app.use(express.json());
app.use(routes);
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
app.listen(port, () => console.log(`Server running at port ${port}`));
