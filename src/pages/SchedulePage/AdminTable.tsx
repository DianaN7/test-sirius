import './Table.css';
import arrowleft from '../img/arrow left.png';
import arrowright from '../img/arrow right.png';
import question from '../img/question.png';
import wallet from '../img/money.png';

export function AdminTable() {
  return (
    <div>
      <div className="calendar-info">
        <img src={arrowleft} alt="arrow" className="arrow" /> <p>Март 2024</p>
        <img src={arrowright} alt="arrow" className="arrow" />{' '}
        <button>Сегодня</button>
        <img src={question} alt="icon" />
      </div>
      <table className="table-cal">
        <caption></caption>
        <thead>
          <tr>
            <th className="top-th">Пн</th> <th className="top-th">Вт</th>
            <th className="top-th">Ср</th> <th className="top-th">Чт</th>
            <th className="top-th">Пт</th> <th className="top-th">Сб</th>
            <th className="top-th">Вс</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <tr className="table-data">
              <th>26</th> <td className="table-notactive"></td>
            </tr>
            <td className="table-notactive">
              <p className="table-data">27</p>
              <div className="border-first">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-first">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td className="table-notactive">
              <p className="table-data">28</p>
              <div className="border-first">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-first">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td className="table-notactive">
              <p className="table-data">29</p>
              <div className="border-red">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-red">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td className="table-notactive">
              <p className="table-data">30</p>
              <div className="border-trans">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-trans">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td className="table-active">
              <p className="data-active">1</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">2</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              <p className="data-active">3</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">4</p>
              <div className="border-green">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">5</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">6</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <tr className="table-data">
              <th className="data-active">7</th>
              <td className="table-notactive"></td>
            </tr>
            <td>
              <p className="data-active">8</p>
              <div className="border-green">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <tr className="table-data">
              <th className="data-active">9</th>
              <td className="table-notactive"></td>
            </tr>
          </tr>
          <tr>
            <tr className="table-data">
              <th className="data-active">10</th>
              <td className="table-notactive"></td>
            </tr>
            <td>
              <p className="data-active">11</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">12</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">13</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">14</p>
              <div className="border-green void">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">15</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">16</p>
              <div className="border-green void">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="data-active">17</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">18</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">19</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">20</p>
              <div className="border-green void">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">21</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active ">22</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">23</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="data-active">24</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active one">25</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">26</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active one">27</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">28</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active one">29</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
            <td>
              <p className="data-active">30</p>
              <div className="border-green">
                <p className="table-p">
                  13:00-13:45 <img src={wallet} alt="icon" />
                </p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="data-active">31</p>
              <div className="border-green void">
                <p className="table-p">13:00-13:45</p>
                <p className="table-p">Ментальная арифтематика</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
