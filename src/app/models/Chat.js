import { Model } from 'sequelize';
import ChatSchema from '../schemas/Chat';

class Chat extends Model {
  static init(sequelize) {
    super.init(ChatSchema.attributes, { ...ChatSchema.options, sequelize });
    return this;
  }
}

export default Chat;
