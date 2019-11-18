import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

import validateChatIndex from './app/validators/ChatIndex';
import validateChatList from './app/validators/ChatList';
import validateChatStore from './app/validators/ChatStore';

import AddressController from './app/controllers/AddressController';

import validateAddressUpdate from './app/validators/AddressUpdate';

const routes = new Router();

routes.get('/chat/:chat_id', validateChatIndex, ChatController.index);
routes.get('/chats/:type/:id/', validateChatList, ChatController.list);
routes.get('/hour', ChatController.hour);
routes.post('/chats', validateChatStore, ChatController.create);
routes.delete('/chats', ChatController.destroy);

routes.patch(
  '/chat_address_update/:chat_id/:address_id',
  validateAddressUpdate,
  AddressController.update
);

export default routes;
