const mongoose = require('mongoose');

const Post = new mongoose.Schema({
  id: {
    required: true,
    type: 'String'
  },
  title: {
    required: true,
    type: 'String'
  },
  content: {
    required: true,
    type: 'String'
  }
});

module.exports = mongoose.model('Post', Post);
