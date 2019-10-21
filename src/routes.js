import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';

const routes = new Router();

routes.get('/chats', validateChatList, ChatController.index);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats', ChatController.destroy);

export default routes;
