import Chat from '../models/Chat';
import express from 'express';

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

    const { chat_id, user_id: user, provider_id: provider } = await Chat.create(
      {
        user_id,
        provider_id,
      }
    );

    return res.json({
      chat_id,
      user,
      provider,
    });
  }
  async destroy(req, res) {
    console.log('oi');
  }
}

export default new ChatController();
