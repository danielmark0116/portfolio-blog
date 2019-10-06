const sanitize = require('mongo-sanitize');

module.exports = function(req, res, next) {
  req.body = sanitize(req.body);
  next();
};
