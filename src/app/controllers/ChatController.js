import Chat from '../models/Chat';

class ChatController {
  async index(req, res) {
    const { user_id, provider_id } = req.params;

    if (user_id && provider_id)
      return res.status(400).json({ error: 'Only one param required' });

    const chats = await Chat.findAll({
      where: user_id ? { user_id } : { provider_id },
    });

    if (!chats.length)
      return res.status(400).json({ error: 'Key provided not exists' });

    return res.json(chats);
  }

  async create(req, res) {
    const { user_id, provider_id } = req.params;

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
    if (!chat) return res.status(400).json({ error: 'Chat does not exists' });

    await Chat.destroy({ where: { chat_id } });
    return res.json(chat);
  }
}

export default new ChatController(); // Singleton
