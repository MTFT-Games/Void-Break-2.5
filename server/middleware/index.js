const config = require('../config.js');

function requiresSecure(req, res, next) {
  if (config.mode === 'prod' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  return next();
}

module.exports = {
  requiresSecure,
};