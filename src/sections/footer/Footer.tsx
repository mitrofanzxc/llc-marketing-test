import { FC } from 'react';
import { PATHS } from '../../shared/paths';
import location from '../../images/icons/location.svg';

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
          <div className="contacts">
            <ul>
              <li className="tel-wrapper">
                <a href="tel:+375259033206" className="tel">{`+375 (25) 903-32-06`}</a>
              </li>
              <li className="tel-wrapper">
                <a href="tel:+375336196476" className="tel">{`+375 (33) 619-64-76`}</a>
              </li>
            </ul>
            <a
              href={`https://yandex.by/maps/-/CCUR56SPSB`}
              target="_blank"
              rel="noreferrer noopener"
              className="location"
            >
              <div className="location-icon__wrapper">
                <img src={location} alt="location" className="location-icon" />
                <p>Адрес</p>
              </div>
              <p className="location-adress">г. Минск, Набережная, 20/А, офис 501</p>
            </a>
            <div className="messengers">
              <p>мессенджеры</p>
              <ul className="messengers-wrapper">
                <li>
                  <a
                    href="https://t.me/montajkolec.by"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="messenger telegram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://viber.com/montajkolec.by"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="messenger viber"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com/montajkolec.by"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="messenger whatsapp"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="copyright-wrapper">
          <p>©2022 компания Все права защищены</p>
          <a href="#">
            <p>Политика конфиденциальности</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
