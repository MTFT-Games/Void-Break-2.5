/**
 * Renders the game page.
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
 function gamePage(req, res) {
    return res.render('game');
  }

  module.exports = {
    gamePage,
  };