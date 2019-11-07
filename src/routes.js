import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

import validateChatIndex from './app/validators/ChatIndex';
import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';

import AddressController from './app/controllers/AddressController';

import validateAddressUpdate from './app/validators/AddressUpdate';

const routes = new Router();

routes.get('/chat', validateChatIndex, ChatController.index);
routes.get('/chats', validateChatList, ChatController.list);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats', ChatController.destroy);

routes.post('/chat_update', validateAddressUpdate, AddressController.update);

export default routes;
