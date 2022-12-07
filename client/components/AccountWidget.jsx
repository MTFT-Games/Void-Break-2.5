import './LoginModal.jsx';
import LoginModal from './LoginModal.jsx';
const { useState } = React;

const AccountWidget = ({ initialAccount }) => {
  const [account, setAccount] = useState(initialAccount);
  const [modalOpen, setModalOpen] = useState(false);

  const dropContent = (account) => {
    if (account) {
      return (
        <div className='is-flex is-flex-direction-column is-align-items-center'>
          <p>{account.username}</p>
          <p>{account.email}</p>
          <button className="button" onClick={() => {fetch('/logout').then(()=>setAccount(null))}}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='is-flex is-flex-direction-column is-align-items-center'>
          <p>Not logged in</p>
          <button className="button" onClick={() => setModalOpen(true)}>Login/Signup</button>
          <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} setAccount={setAccount}></LoginModal>
        </div>
      );
    }
  };

  return (
    <div className={`navbar-item is-tab has-text-light dropdown is-hoverable is-right${modalOpen ? ' is-active' : ''}`}>
      <div className="dropdown-trigger">Account</div>
      <div className="dropdown-menu">
        <div className="dropdown-content has-text-dark">
          {dropContent(account)}
        </div>
      </div>
    </div>
  );
};

export default AccountWidget;