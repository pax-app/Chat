import Chat from '../models/Chat';

class ChatController {
  async index(req, res) {
    const { user_id, provider_id } = req.query;

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
    const { user_id, provider_id } = req.body;

    const chat = await Chat.create({ user_id, provider_id });
    return res.json(chat);
  }

  async update(req, res) {
    const { chat_id, address_id } = req.body;

    const chat = await Chat.update(
      { user_address: address_id },
      { where: { chat_id } }
    );
    return res.json({ status: [...chat] == 1 ? 'updated' : 'untouched' });
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
