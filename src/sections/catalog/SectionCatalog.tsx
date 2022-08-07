import { FC, useState, useEffect, MouseEvent } from 'react';
import septic2 from '../../images/septic2.png';
import septic2x from '../../images/septic2x.jpg';
import septic3 from '../../images/septic3.png';
import septic3x from '../../images/septic3x.jpg';
import './SectionCatalog.scss';

const SectionCatalog: FC = () => {
  const [catalogSection, setCatalogSection] = useState<string>('Однокамерные');

  function handleCatalogSection(event: MouseEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value as string;
    setCatalogSection(value);
  }

  useEffect(() => {
    localStorage.setItem('catalogSection', JSON.stringify(catalogSection));
  }, [catalogSection]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('catalogSection') || '');
    if (catalogSection) {
      setCatalogSection(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="buttons">
          <input
            type="radio"
            name="catalog-button"
            id="Однокамерные"
            value="Однокамерные"
            defaultChecked={true}
            onClick={handleCatalogSection}
          />
          <label htmlFor="Однокамерные" className="catalog-button">
            Однокамерные
          </label>
          <input
            type="radio"
            name="catalog-button"
            id="Двухкамерные"
            value="Двухкамерные"
            onClick={handleCatalogSection}
          />
          <label htmlFor="Двухкамерные" className="catalog-button">
            Двухкамерные
          </label>
          <input
            type="radio"
            name="catalog-button"
            id="Трехкамерные"
            value="Трехкамерные"
            onClick={handleCatalogSection}
          />
          <label htmlFor="Трехкамерные" className="catalog-button">
            Трехкамерные
          </label>
        </div>
        {catalogSection === 'Однокамерные' && (
          <div className="catalog" id="catalog">
            <p className="catalog-description">
              Изготовлены из бетонных колец, зарытых в одну яму. Они имеют небольшой объем,
              отстаивание сточных вод и разложение осадка в них происходит не так быстро. Поэтому
              такой вариант подойдет для дачных домов или жилых построек с малым числом проживающих.
            </p>
            <ul className="catalog-items">
              <li className="catalog-item single">
                <img src={septic2} alt="septic2" className="" />
                <h3>Септик из 2-х колец КС 15-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
              <li className="catalog-item single">
                <img src={septic3} alt="septic3" className="" />
                <h3>Септик из 3-х колец КС 15-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
              <li className="catalog-item single">
                <img src={septic3} alt="septic3" className="" />
                <h3>Септик из 3-х колец КС 10-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
            </ul>
          </div>
        )}
        {catalogSection === 'Двухкамерные' && (
          <div className="catalog" id="catalog">
            <p className="catalog-description">
              Имеют несколько камер, в которых стоки разбавляются, отстаиваются, а получившийся
              органический осадок разлагается. Благодаря такой переработке, откачивать воду из
              септика приходится не чаще, чем раз в 2-3 года, что очень удобно и выгодно. Такой
              вариант полностью отвечает санитарным регламентам, подходит для больших домов или
              маленьких коттеджей.
            </p>
            <ul className="catalog-items">
              <li className="catalog-item double">
                <img src={septic2x} alt="septic2x" className="" />
                <h3>Септик из 2-х колодцев по 2 кольца КС 10-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
              <li className="catalog-item double">
                <img src={septic2x} alt="septic2x" className="" />
                <h3>Септик из 2-х колодцев по 2 кольца КС 15-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
              <li className="catalog-item double">
                <img src={septic2x} alt="septic2x" className="" />
                <h3>Септик из 2-х колодцев по 3 кольца КС 15-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
              <li className="catalog-item double">
                <img src={septic2x} alt="septic2x" className="" />
                <h3>Септик из 2-х колодцев по 3 кольца КС 10-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
            </ul>
          </div>
        )}
        {catalogSection === 'Трехкамерные' && (
          <div className="catalog" id="catalog">
            <p className="catalog-description">
              Очень надежные, имеют максимальную производительность, поэтому отлично справляются с
              большим количеством сточных вод.
            </p>
            <ul className="catalog-items">
              <li className="catalog-item double">
                <img src={septic3x} alt="septic3x" className="" />
                <h3>Септик из 3-х колодцев по 3 кольца КС 15-9</h3>
                <button className="catalog-button order-button">Заказать</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export { SectionCatalog };
