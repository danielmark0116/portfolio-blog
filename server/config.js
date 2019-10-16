require('dotenv').config();

if (process.env.MODE === 'production') {
  module.exports = {
    PORT: process.env.PORT || 8001,
    DB: process.env.DB,
    prefix: '/blog'
  };
} else {
  module.exports = {
    PORT: process.env.PORT || 8001,
    DB: 'mongodb://localhost:27017/blog-mern',
    prefix: ''
  };
}
