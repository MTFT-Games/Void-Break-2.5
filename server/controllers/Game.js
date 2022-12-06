/**
 * Renders the game page.
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
function gamePage(req, res) {
    return res.render('game', req.session.account ? JSON.stringify(req.session.account) : null);
}

/**
* Renders the about page.
* @param {Express.Request} req The client request.
* @param {Express.Response} res The server response.
*/
function aboutPage(req, res) {
    return res.render('about', req.session.account ? JSON.stringify(req.session.account) : null);
}

module.exports = {
    gamePage,
    aboutPage,
};