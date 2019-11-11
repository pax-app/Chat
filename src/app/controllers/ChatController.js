import Chat from '../models/Chat';

class ChatController {
  async index(req, res) {
    const { chat_id } = req.params;

    const chat = await Chat.findByPk(chat_id);

    console.log(chat);

    if (!chat)
      return res.status(400).json({ error: 'Key provided not exists' });

    return res.json(chat);
  }

  async list(req, res) {
    const { type } = req.params;

    console.log(req.params);

    const provider_id = type === 'provider' ? req.params.id : null;
    const user_id = type === 'user' ? req.params.id : null;

    const chats = await Chat.findAll({
      where: type == 'user' ? { user_id } : { provider_id },
    });

    if (!chats.length)
      return res.status(400).json({ error: 'Key provided not exists' });

    return res.json(chats);
  }

  async create(req, res) {
    const { user_id, provider_id } = req.body;

    const chat = await Chat.create({ user_id, provider_id });
    return res.json(chat);
  }

  async destroy(req, res) {
    const { chat_id } = req.query;

    const chat = await Chat.findByPk(chat_id);
    if (!chat) return res.status(400).json({ error: 'Chat does not exists' });

    await Chat.destroy({ where: { chat_id } });
    return res.json(chat);
  }
}

export default new ChatController(); // Singleton
