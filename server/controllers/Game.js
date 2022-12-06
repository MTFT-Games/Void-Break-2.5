/**
 * Renders the game page.
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
function gamePage(req, res) {
    return res.render('game');
}

/**
* Renders the about page.
* @param {Express.Request} req The client request.
* @param {Express.Response} res The server response.
*/
function aboutPage(req, res) {
    return res.render('about');
}

module.exports = {
    gamePage,
    aboutPage,
};