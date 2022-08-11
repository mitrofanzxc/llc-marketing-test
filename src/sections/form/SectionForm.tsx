import { FC } from 'react';
import { Form } from '../../components/form/Form';
import example from '../../images/example.png';
import './SectionForm.scss';

const SectionForm: FC = () => {
  return (
    <section className="section-form__bg">
      <div className="wrapper">
        <img src={example} alt="example" className="section-form__example" />
        <div className="section-form__description">
          <h2>
            <strong>Заказать консультацию</strong> у нашего инженера и узнать еще больше преимуществ
          </h2>
          <h4 className="fw_regular">
            В течение 5-ти минут с Вами свяжется наш специалист, чтобы обсудить все волнующие вас
            вопросы.
          </h4>
        </div>
        <Form />
      </div>
    </section>
  );
};

export { SectionForm };
