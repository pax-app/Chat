import { Router } from 'express';
import ChatController from './app/controllers/ChatController';
import MessageController from './app/controllers/MessageController';

import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';

const routes = new Router();

routes.get('/chats', validateChatList, ChatController.index);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats/:chat_id', ChatController.destroy);

routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.create);

export default routes;