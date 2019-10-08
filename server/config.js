if (process.env.MODE === 'production') {
  module.exports = {
    PORT: process.env.PORT || 8000,
    DB: process.env.DB
  };
} else {
  module.exports = {
    PORT: 8000,
    DB: 'mongodb://localhost:27017/blog-mern'
  };
}
