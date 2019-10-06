import { Router } from 'express';
import ChatController from './app/controllers/ChatController';
import MessageController from './app/controllers/MessageController';

const routes = new Router();

routes.get('/chats', ChatController.index);
routes.post('/chats', ChatController.create);
routes.delete('/chats/:chat_id', ChatController.destroy);

routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.create);

export default routes;
