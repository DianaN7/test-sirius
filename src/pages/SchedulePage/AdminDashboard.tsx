import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { useNavigate } from 'react-router-dom';
import logo from '../img/full-logo.png';
import ListMenu from './ListMenu';
import gift from '../img/gift.png';
import './Navbar.css';
import AdminHeader from './AdminHeader';
import { AdminTable } from './AdminTable';

const AdminDashboard = () => {
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
            подарки!
          </p>
          <button>Узнать</button>
          <img src={gift} alt="" className="gift-img" />
        </div>
      </div>
      <AdminHeader />
    </div>
  );
};

export default AdminDashboard;
