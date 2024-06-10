import { Link } from 'react-router-dom';
import home from '../../pages/img/home.png';

// import { headerClasses } from './headerClasses';
import { useAppSelector } from '../../hooks/storeHook';
import './Header.css';

const Header = () => {
  // const {
  //   header,
  //   navContainer,
  //   navContent,
  //   linkHome,
  //   linkProfile,
  //   linkSignIn,
  // } = headerClasses;

  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="header">
      <nav className="navContainer">
        <div className="navContent">
          <div className="profile-style">
            <Link to="/" className="linkhome">
              <img src={home} alt="" className="home-icon" />
            </Link>

            {Boolean(!user) && (
              <Link to="/auth" className="linkSignIn">
                Sign in
              </Link>
            )}
            {user ? (
              <Link to="/profile">
                {user?.photoUrl ? (
                  <img
                    className="linkProfile"
                    src={user.photoUrl}
                    alt="Avatar"
                  />
                ) : (
                  <div className="linkprofile">
                    {user?.email[0].toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
