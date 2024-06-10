import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';

import { useEffect } from 'react';
import ListMenu from '../SchedulePage/ListMenu';
import logo from '../img/full-logo.png';
import gift from '../img/gift.png';
import ProfileHeader from '../SchedulePage/ProfileHeader';
import ad from '../img/ad.png';
import report from '../img/report.png';
import usericon from '../img/user.png';
import './MainPage.css';

const MainPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Boolean(!user)) {
      navigate('/auth');
    }
  }, [user, navigate]);

  return (
    <div>
      <div id="sidebar">
        <a href="" className="brand">
          <img src={logo} alt="" />
        </a>
        <ListMenu />
        <div className="block-gift">
          <h3>Учитесь бесплатно</h3>
          <p>
            Приводите друзей с детьми заниматься в Sirius Future и получайте
            подарки !
          </p>
          <button>Узнать</button> <img src={gift} alt="" className="gift-img" />
        </div>
      </div>
      <div id="content">
        <ProfileHeader />
        <div className="main-img">
          <a href="#" className="main-link">
            <img src={ad} alt="" className="first-pic" />
            <div className="second-block">
              <p className="info-p">Следующее занятие начнется через:</p>
              <p className="info-date">
                <p className="big">6</p> <p className="small">д</p>
                <p className="big">12</p> <p className="small">ч</p>
                <p className="big">24</p> <p className="small">мин</p>
              </p>
              <button className="main-btn">Button</button>
            </div>
            <img src={report} alt="" className="third-pic" />
          </a>
        </div>
        <div className="lessons">
          <div className="schedule-lesson">
            <p className="p-lesson">Баланс занятий</p>
            <div className="les-block">
              <span>Ментальная Арифметика</span> <span>32</span>
            </div>
            <div className="les-block">
              <span>Программирование</span> <span>0</span>
            </div>
            <div className="les-block more">
              <span>Скорочтение</span> <span>4</span>
            </div>
            <div className="btn-l">
              <button className="button-last">Button</button>
            </div>
          </div>
          <div className="upcoming-lesson">
            <p className="p-lesson">Ближайшие уроки</p>
            <div className="upcoming-desc">
              <div className="date-month">
                <p className="big">1</p>
                <span className="small-lesson">мая</span>
                <p className="big">30</p>
                <span className="small-lesson">октября</span>
                <p className="big">16</p>
                <span className="small-lesson">ноября</span>
              </div>
              <div className="info-lesson">
                <span className="name-les">Ментальная Арифметика</span>
                <span className="name-les">Программирование</span>
                <span className="name-les">Скорочтение</span>
              </div>
              <div className="time-lesson">
                <span className="small-lesson">14:00-14:25</span>
                <span className="small-lesson">11:00-11:11</span>
                <span className="small-lesson">9:00-9:45</span>
              </div>
              <div className="icon-user">
                <span className="user-icon">
                  <img src={usericon} alt="" className="icon-us" /> Белкина Инна
                </span>
                <span className="user-icon">
                  <img src={usericon} alt="" className="icon-us" /> Животновская
                  Оксана
                </span>
                <span className="user-icon">
                  <img src={usericon} alt="" className="icon-us" /> Мин Елена
                </span>
              </div>
              <div className="last-btn">
                <div className="btn-block">
                  <button className="color-btn">Button</button>
                  <button className="color-btn">Button</button>
                </div>
                <div className="btn-block">
                  <button className="color-btn">Button</button>
                  <button className="color-btn">Button</button>
                </div>
                <div className="btn-block">
                  <button className="color-btn">Button</button>
                  <button className="color-btn">Button</button>
                </div>
              </div>
            </div>
            <div className="btn-l">
              <button className="button-last">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
