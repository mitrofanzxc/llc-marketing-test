import { FC } from 'react';
import { PATHS } from '../../shared/paths';
import { Burger } from '../../components/buttons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeBurger } from '../../features/burgerHandler';

import phone from '../../images/icons/phone.png';
import './Header.scss';

const Header: FC = () => {
  const { main, catalog, reviews, stages } = PATHS;

  const isBurgerOpen = useAppSelector(({ burgerHandler }) => burgerHandler.isBurgerOpen);
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper-hero">
      <header data-testid="header" className="header">
        <a href={main} className="logo color_green">
          Montajkolec.by
        </a>
        <nav className={`nav ${isBurgerOpen ? 'nav_visible' : ''}`}>
          <ul className="nav-wrapper">
            <li>
              <a href={catalog} className="nav-link" onClick={() => dispatch(closeBurger())}>
                Каталог
              </a>
            </li>
            <li>
              <a href={reviews} className="nav-link" onClick={() => dispatch(closeBurger())}>
                Отзывы
              </a>
            </li>
            <li>
              <a href={stages} className="nav-link" onClick={() => dispatch(closeBurger())}>
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
        <Burger />
      </header>
    </div>
  );
};
export { Header };
