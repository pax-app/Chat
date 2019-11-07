import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';
import validateChatUpdate from './app/validators/ChatUpdate';

const routes = new Router();

routes.get('/chats', validateChatList, ChatController.index);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats', ChatController.destroy);
routes.post('/chat_update', validateChatUpdate, ChatController.update);

export default routes;
