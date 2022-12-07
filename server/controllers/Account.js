const { Account } = require('../models');

/**
 * Redirects to /
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
function logout(req, res) {
  req.session.destroy();
  return res.status(205).send();
}

/**
 *
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
function login(req, res) {
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;

  if (!username || !pass) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  return Account.authenticate(username, pass, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password!', id: 'BadAuth'});
    }

    req.session.account = Account.toAPI(account);

    return res.json(req.session.account);
  });
}

/**
 * Saves a new account to the database.
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
async function signup(req, res) {
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;
  const pass2 = `${req.body.pass2}`;
  const email = `${req.body.email}`;

  if (!username || !pass || !pass2 || !email) {
    return res.status(400).json({ error: 'All fields are required!', id: 'MissingField' });
  }

  if (pass !== pass2) {
    return res.status(400).json({ error: 'Passwords do not match!', id: 'PassMismatch' });
  }

  try {
    const hash = await Account.generateHash(pass);
    const newAccount = new Account({ username, password: hash, email });
    await newAccount.save();
    req.session.account = Account.toAPI(newAccount);
    return res.json(req.session.account);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Username already in use.', id: 'UserTaken' });
    }
    return res.status(400).json({ error: 'An error occurred', id: 'Unknown' });
  }
}

/**
 * Changes the password of an account.
 * @param {Express.Request} req The client request.
 * @param {Express.Response} res The server response.
 */
async function resetPass(req, res) {
  const username = `${req.session.account.username}`;
  const pass = `${req.body.pass}`;
  const pass2 = `${req.body.pass2}`;
  const pass3 = `${req.body.pass3}`;

  if (!username || !pass || !pass2 || !pass3) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  if (pass2 !== pass3) {
    return res.status(400).json({ error: 'Passwords do not match!' });
  }

  return Account.authenticate(username, pass, async (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong password!' });
    }

    try {
      const hash = await Account.generateHash(pass3);
      const modifiedAccount = account;
      modifiedAccount.password = hash;
      await modifiedAccount.save();

      return res.status(200);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'An error occurred' });
    }
  });
}

module.exports = {
  resetPass,
  login,
  signup,
  logout,
};
