import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleBurger } from '../../../features/burgerHandler';
import './Burger.scss';

const Burger: FC = () => {
  const isBurgerOpen = useAppSelector(({ burgerHandler }) => burgerHandler.isBurgerOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    if (isBurgerOpen) {
      body.classList.add('overflow_hidden');
    } else {
      body.classList.remove('overflow_hidden');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBurgerOpen]);

  return (
    <>
      <div
        onClick={() => dispatch(toggleBurger())}
        className={`shadow ${isBurgerOpen ? 'shadow_active' : ''}`}
      />
      <button
        onClick={() => dispatch(toggleBurger())}
        className={`burger ${isBurgerOpen ? 'burger_visible' : ''}`}
      >
        <div className="burger-bar" />
        <div className="burger-bar" />
      </button>
    </>
  );
};

export { Burger };
