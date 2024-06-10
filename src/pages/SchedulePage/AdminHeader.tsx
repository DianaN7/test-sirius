import { AdminTable } from './AdminTable';
import './Header.css';
import ProfileHeader from './ProfileHeader';

const AdminHeader = () => {
  return (
    <div id="content">
      <ProfileHeader />
      <nav>
        <div className="form-input">
          <select className="nav-select">
            <option>Выберите предмет</option> <option>Арифметика</option>
          </select>
        </div>
        <button className="desc-nav">Изменить расписание</button>
      </nav>
      <AdminTable />
    </div>
  );
};

export default AdminHeader;
