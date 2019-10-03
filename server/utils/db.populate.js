const Post = require('../models/post.model');

module.exports = function() {
  const data = [
    {
      id: '1a',
      title: 'Is it really?',
      author: 'John Doe',
      content:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
    },
    {
      id: '2a',
      title: 'This is not what I was thinking of...',
      author: 'John Doe',
      content:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.'
    },
    {
      id: '3a',
      title: 'Blinded by desire',
      author: 'John Doe',
      content:
        'Dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.'
    }
  ];

  data.forEach(i => {
    Post.findOne({ id: i.id }, (err, post) => {
      if (!post) {
        Post.create(i);
        console.log('Populating database...');
      }
    });
  });
};
