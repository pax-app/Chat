import { Router } from 'express';
import ChatController from './app/controllers/ChatController';
import MessageController from './app/controllers/MessageController';

import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';
import validateMessageList from './app/validators/MessageList';
import validateMessageStore from './app/validators/MessageStore';

const routes = new Router();

routes.get('/chats', validateChatList, ChatController.index);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats/:chat_id', ChatController.destroy);

routes.get('/messages', validateMessageList, MessageController.index);
routes.post('/messages', validateMessageStore, MessageController.create);

export default routes;
