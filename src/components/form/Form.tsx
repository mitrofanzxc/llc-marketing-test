import { FC, useEffect, useState, MouseEvent, FocusEvent, ChangeEvent } from 'react';
import './Form.scss';

const Form: FC = () => {
  const [isPhone, setIsPhone] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPhoneBlur, setIsPhoneBlur] = useState<boolean>(false);
  const [isCheckedBlur, setIsCheckedBlur] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<string>('Поле не может быть пустым.');
  const [isCheckedError, setIsCheckedError] = useState<string>('Вы должны принять соглашение.');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    const NAME = event.currentTarget.name;
    switch (NAME) {
      case 'tel':
        setIsPhoneBlur(true);
        break;
      case 'checkbox':
        setIsCheckedBlur(true);
        break;
    }
  };

  const phoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const VALUE = event.currentTarget.value;
    setIsPhone(VALUE);
    const result = /^(\+375|80) \((29|25|44|33|17)\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/gm;
    if (!result.test(String(VALUE).toLocaleLowerCase())) {
      setIsPhoneError('Некорректно введен номер.');
    } else {
      setIsPhoneError('');
    }
  };

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setIsCheckedError('Вы должны принять соглашение.');
    } else {
      setIsCheckedError('');
    }
  };

  const sendFormData = () => {
    const XHR = new XMLHttpRequest();
    const FORM = document.querySelector('.form') as HTMLFormElement;
    const FORM_DATA = new FormData(FORM);

    XHR.addEventListener('load', (event) => {
      const target = event.target as XMLHttpRequest;
      console.log('target.responseText ===', target.responseText);
      setIsFormSend(true);
    });

    XHR.addEventListener('error', (event) => {
      console.log('Упс! Что-то пошло не так.');
      setIsFormSend(false);
    });

    XHR.open('POST', 'https://example.com/cors.php');
    XHR.send(FORM_DATA);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendFormData();
    setIsPhone('');
    setIsChecked(false);
  };

  useEffect(() => {
    if (isPhoneError || isCheckedError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [isPhoneError, isCheckedError]);

  return (
    <form method="POST" className="form">
      <input type="text" name="" id="" placeholder="Имя" className="input" />
      <p className="error-field"></p>
      <input
        className="input"
        type="tel"
        id="tel"
        name="tel"
        placeholder="Телефон"
        onBlur={(event) => blurHandler(event)}
        onChange={(event) => phoneHandler(event)}
        value={isPhone}
      />
      <p className="error-field">{isPhoneBlur && isPhoneError ? isPhoneError : ''}</p>
      <button type="submit" className="submit" onClick={handleSubmit}>
        Хочу консультацию
      </button>
      <label className="checkbox-wrapper">
        Я согласен на обработку моих персональных данных
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onBlur={(event) => blurHandler(event)}
          onChange={checkboxHandler}
          checked={isChecked}
        />
        <span className="checkmark"></span>
      </label>
      <p className="error-field">{isCheckedBlur && isCheckedError ? isCheckedError : ''}</p>
    </form>
  );
};

export { Form };
