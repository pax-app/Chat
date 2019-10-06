import Chat from '../models/Chat';

class ChatController {
  async index(req, res) {
    const { user_id, provider_id } = req.body;

    const chats = await Chat.findAll({
      where: user_id ? { user_id } : { provider_id },
    });

    return res.json(chats);
  }

  async create(req, res) {
    const { user_id, provider_id } = req.body;

    const chat = await Chat.create({ user_id, provider_id });

    return res.json({
      chat_id: chat.chat_id,
      user: chat.user_id,
      provider: chat.provider_id,
    });
  }

  async destroy(req, res) {
    const { chat_id } = req.params;

    const chat = await Chat.findByPk(chat_id);

    await Chat.destroy({ where: { chat_id } });

    return res.json(chat);
  }
}

export default new ChatController();
