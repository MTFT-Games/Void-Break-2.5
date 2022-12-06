const controllers = require('./controllers');
// const mid = require('./middleware');

/**
 * Sets routes to controller functions.
 * @param {Express} app The express application.
 */
function router(app) {
  app.get('/', (req, res) => res.json({ msg: 'Good' }));
  
  app.get('/game', controllers.Game.gamePage);

  app.post('/login', controllers.Account.login);
  app.post('/signup', controllers.Account.signup);
  app.post('/resetPass', controllers.Account.resetPass);
  app.post('/logout', controllers.Account.logout);
}

module.exports = router;
