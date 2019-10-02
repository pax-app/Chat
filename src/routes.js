import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Hello World :D');
});

export default routes;
