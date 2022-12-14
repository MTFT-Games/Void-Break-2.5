const controllers = require('./controllers');
const mid = require('./middleware');

/**
 * Sets routes to controller functions.
 * @param {Express} app The express application.
 */
function router(app) {
  app.get('/', controllers.Game.aboutPage);
  
  app.get('/game', controllers.Game.gamePage);

  app.post('/login', mid.requiresSecure, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, controllers.Account.signup);
  app.post('/resetPass', mid.requiresSecure, controllers.Account.resetPass);
  app.get('/logout', controllers.Account.logout);

  app.get('*', (req, res) => res.render('notFound'));
}

module.exports = router;
