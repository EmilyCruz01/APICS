const Message = require('../models/message');

const messages = [];

exports.getMessages = (req, res) => {
  res.json(messages);
};

exports.postMessage = (req, res) => {
  const { username, text } = req.body;
  const newMessage = new Message(username, text);
  messages.push(newMessage);
  io.emit('chat message', newMessage);
  res.status(201).json(newMessage);
};

exports.shortPolling = (req, res) => {
  res.json(messages);
};
