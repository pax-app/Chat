import Sequelize, { Model } from 'sequelize';
import MessageSchema from '../schemas/Message';

class Message extends Model {
  static init(sequelize) {
    super.init(MessageSchema.attributes, {
      ...MessageSchema.options,
      sequelize,
    });
    return this;
  }
}

export default Message;
