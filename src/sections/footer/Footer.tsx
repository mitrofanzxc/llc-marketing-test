import { FC } from 'react';
import { PATHS } from '../../shared/paths';

import './Footer.scss';

const Footer: FC = () => {
  const { main, catalog, reviews, stages } = PATHS;

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-wrapper">
          <div className="logo-wrapper">
            <a href={main} className="logo color_white">
              Montajkolec.by
            </a>
            <p className="requisites">Реквизиты</p>
          </div>
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
          </nav>
          <ul>
            <li className="tel-wrapper">
              <a href="tel:+375259033206" className="tel">{`+375 (25) 903-32-06`}</a>
            </li>
            <li className="tel-wrapper">
              <a href="tel:+375336196476" className="tel">{`+375 (33) 619-64-76`}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
