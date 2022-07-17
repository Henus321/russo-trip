import { useState, useContext } from 'react';
import { CompanyContext } from '../../contexts/company.context';

import Loader from '../loader/loader.component';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import './accordion.styles.scss';

const Accordion = () => {
  const { faq } = useContext(CompanyContext);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="accordion">
      {faq.length > 0 ? (
        faq.map((item, i) => (
          <div className="accordion__item-container" key={i}>
            <div className="accordion__item" onClick={() => toggle(i)}>
              <div className="accordion__question">
                <span className="accordion__arrow">
                  {selected === i ? (
                    <FaAngleUp className="accordion__icon" />
                  ) : (
                    <FaAngleDown className="accordion__icon" />
                  )}
                </span>
                <h3 className="accordion__title">{item.question}</h3>
              </div>
              <span>
                {selected === i ? (
                  <FaMinus className="accordion__icon" />
                ) : (
                  <FaPlus className="accordion__icon" />
                )}
              </span>
            </div>
            <div
              className={
                selected === i
                  ? 'accordion__content-show'
                  : 'accordion__content'
              }
            >
              {item.answer}
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Accordion;
