import Message from '../models/Message';
import Chat from '../models/Chat';

class MessageController {
  async index(req, res) {
    const { chat_id } = req.body;

    const chat = await Chat.findByPk(chat_id);
    if (!chat) return res.status(400).json({ error: 'Chat does not exists' });

    const messages = await Message.findAll({ where: { chat_id } });
    return res.json(messages);
  }

  async create(req, res) {
    const { sender, date_time_sent, text_message, chat_id } = req.body;

    const chat = await Chat.findByPk(chat_id);
    if (!chat) return res.status(400).json({ error: 'Chat does not exists' });

    const message = await Message.create({
      sender,
      date_time_sent,
      text_message,
      chat_id,
    });

    return res.json({
      message_id: message.message_id,
      sender: message.sender,
      date_time_sent: date_time_sent,
      text_message: message.text_message,
      chat_id: message.chat_id,
    });
  }
}

export default new MessageController();
