import { FC } from 'react';
import { PATHS } from '../../shared/paths';

import phone from '../../images/icons/phone.png';
import './Header.scss';

const Header: FC = () => {
  const { main, catalog, reviews, stages } = PATHS;

  return (
    <div className="wrapper-hero">
      <header data-testid="header" className="header">
        <a href={main} className="logo">
          Montajkolec.by
        </a>
        <nav className="nav">
          <ul className="nav-wrapper">
            <li>
              <a href={catalog} className="nav-link">
                Каталог
              </a>
            </li>
            <li>
              <a href={reviews} className="nav-link">
                Отзывы
              </a>
            </li>
            <li>
              <a href={stages} className="nav-link">
                Этапы работ
              </a>
            </li>
          </ul>
          <ul>
            <li className="tel-wrapper">
              <img src={phone} alt="phone" className="tel-icon" />
              <a href="tel:+375259033206" className="tel">{`+375 (25) 903-32-06`}</a>
            </li>
            <li className="tel-wrapper">
              <img src={phone} alt="phone" className="tel-icon" />
              <a href="tel:+375336196476" className="tel">{`+375 (33) 619-64-76`}</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export { Header };
