import Chat from '../models/Chat';

class AddressController {
  async update(req, res) {
    const { chat_id, address_id } = req.params;

    const chat = await Chat.update(
      { user_address: address_id },
      { where: { chat_id } }
    );
    return res.json({ status: [...chat] == 1 ? 'updated' : 'untouched' });
  }
}

export default new AddressController(); // Singleton
