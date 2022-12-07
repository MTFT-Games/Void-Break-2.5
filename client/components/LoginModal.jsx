const { useState } = React;

const LoginModal = ({ modalOpen, setModalOpen, setAccount }) => {
  const [signupActive, setSignupActive] = useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();

    const username = e.target.querySelector('#username').value;
    const pass = e.target.querySelector('#pass').value;
    const pass2 = e.target.querySelector('#pass2').value;
    const email = e.target.querySelector('#email').value;

    // All fields use the required attribute so it is unnecessary to guard against missing fields

    if (pass !== pass2) {
      e.target.querySelector('#pass2').value = '';
      e.target.querySelector('#pass2').placeholder = "Passwords don't match";
      e.target.querySelector('#pass2').classList.add('is-danger');
      return;
    }

    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, pass, pass2, email}),
    });
    const json = await response.json();

    if (response.ok) {
      setAccount(json);
      return;
    }

    if (json.id == 'UserTaken') {
      e.target.querySelector('#username').value = '';
      e.target.querySelector('#username').placeholder = "Username already taken";
      e.target.querySelector('#username').classList.add('is-danger');
      return;
    }

    const error = document.createElement('p');
    error.classList.add('is-danger');
    error.textContent = 'An unknown error occurred, please try again later.'
    e.target.appendChild(error);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.querySelector('#username').value;
    const pass = e.target.querySelector('#pass').value;

    // All fields use the required attribute so it is unnecessary to guard against missing fields

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, pass}),
    });
    const json = await response.json();

    if (response.ok) {
      setAccount(json);
      return;
    }

    if (json.id == 'BadAuth') {
      e.target.querySelector('#username').value = '';
      e.target.querySelector('#username').classList.add('is-danger');
      e.target.querySelector('#pass2').value = '';
      e.target.querySelector('#pass2').classList.add('is-danger');
      return;
    }

    const error = document.createElement('p');
    error.classList.add('is-danger');
    error.textContent = 'An unknown error occurred, please try again later.'
    e.target.appendChild(error);
  };

  const formContent = (signup) => {
    if (signup) {
      return (
        <form id="signupForm" name="signupForm" onSubmit={handleSignup} action="/signup" method="POST">
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input
                className="input"
                name="username"
                id="username"
                type="text"
                placeholder="Username"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input
                className="input"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input
                className="input"
                name="pass"
                id="pass"
                type="password"
                placeholder="Password"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left">
              <input
                className="input"
                name="pass2"
                id="pass2"
                type="password"
                placeholder="Re-type Password"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <input type="submit" className="button is-primary" value="Submit"/>
            </div>
            <div className="control">
              <button className="button is-text" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </form>
      );
    }

    return (
      <form id="loginForm" name="loginForm" onSubmit={handleLogin} action="/login" method="POST">
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="username"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="pass"
              id="pass"
              type="password"
              placeholder="Password"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <input type="submit" className="button is-primary" value="Submit"/>
          </div>
          <div className="control">
            <button className="button is-text" onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => setModalOpen(false)}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{signupActive ? 'Sign Up' : 'Login'}</p>
          <button className="delete" aria-label="close" onClick={() => setModalOpen(false)}></button>
        </header>
        <section className="modal-card-body">
          <div className="tabs">
            <ul>
              <li className={signupActive ? '' : 'is-active'}><a onClick={() => setSignupActive(false)}>Login</a></li>
              <li className={signupActive ? 'is-active' : ''}><a onClick={() => setSignupActive(true)}>Sign Up</a></li>
            </ul>
          </div>
          {formContent(signupActive)}
        </section>
      </div>
    </div>
  );
};

export default LoginModal;