import "./AccountWidget.jsx";
import AccountWidget from "./AccountWidget.jsx";
const { useState } = React;

const NavHeader = ({ active, account }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="navbar py-3">
        {/* Brand and burger */}
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            {/* TODO: make a proper logo/brand */}
            <i className="fa-brands fa-battle-net is-size-3 has-text-light mr-2"></i>
            <h1 className="title has-text-light">Void Break 2</h1>
          </a>
          <a className={`navbar-burger has-text-light ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        {/* Nav menu */}
        <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a
              className={`navbar-item is-tab has-text-light ${
                active === 'about' ? 'is-active' : ''
              }`}
              href="/"
              id="about"
            >
              About
            </a>
            <a
              className={`navbar-item is-tab has-text-light ${
                active === 'game' ? 'is-active' : ''
              }`}
              href="/game"
              id="game"
            >
              Game
            </a>
            <AccountWidget initialAccount={account}></AccountWidget>
          </div>
        </div>
      </nav>
    </header>
  );
};

const header = document.getElementById('nav-header');
const headerArgs = header.textContent.split('|');
const account = headerArgs[1] ? JSON.parse(headerArgs[1]) : null;
ReactDOM.render(
	<NavHeader active={headerArgs[0]} account={account} />,
	header
);
