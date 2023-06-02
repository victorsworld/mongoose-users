const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const todoSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const toDo = mongoose.model('todo', todoSchema);

module.exports = toDo;
