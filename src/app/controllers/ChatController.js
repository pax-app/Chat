import Chat from '../models/Chat';
import express from 'express';

class ChatController {
  async index(req, res) {
    return res.json({ ok: true });
  }
  async create(req, res) {
    console.log('oi');
  }
  async destroy(req, res) {
    console.log('oi');
  }
}

export default new ChatController();
