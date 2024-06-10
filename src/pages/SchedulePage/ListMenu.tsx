import menu from '../img/left menu icon.png';
import data from '../img/data.png';
import medal from '../img/medal.png';
import money from '../img/Wallet.png';
import train from '../img/train.png';
import lib from '../img/lib.png';
import support from '../img/support.png';
import setting from '../img/setting.png';
import question from '../img/question.png';
import { Link } from 'react-router-dom';

const ListMenu = () => {
  return (
    <div className="side-menu flex">
      <ul className="side-menu top">
        <li className="active">
          <Link to="/admin">
            <img src={menu} alt="" className="menu-img" />
            <span className="text">Главная</span>
          </Link>
        </li>
        <li>
          <Link to="/schedule">
            <img src={data} alt="" className="menu-img" />
            <span>Расписание</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <img src={money} alt="" className="menu-img" /> <span>Оплата</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={medal} alt="" className="menu-img" />
            <span>Достижения</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={train} alt="" className="menu-img" />
            <span>Тренажеры</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={lib} alt="" className="menu-img" />
            <span>Бибилиотека</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={support} alt="" className="menu-img" />
            <span>Проверка связи</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={setting} alt="" className="menu-img" />
            <span>Настройки</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={question} alt="" className="menu-img" />
            <span>Вопросы</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListMenu;
