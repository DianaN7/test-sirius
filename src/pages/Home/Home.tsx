import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { homeClasses } from './homeClasses';
import chat from '../img/chat icon.png';

const Home = () => {
  const { container, cardContainer, title, description } = homeClasses;

  return (
    <>
      <Header />
      <div className={container}>
        <div className={cardContainer}>
          <Link to="/admin" className="linkhome">
            Войти в личный кабинет
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
