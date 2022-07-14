import { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import './accordion.styles.scss';

const data = [
  {
    question: "What's right after, how to get to the hotel?",
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
  {
    question: 'What about lunch during the tour?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
  {
    question: 'How many people will be in the group?',

    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
  {
    question: 'What about transportation, how do I get to the place?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
  {
    question: 'What if I freeze or get hot during the tour?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
  {
    question: "What if I don't want to go until the end of the tour?",
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi consequuntur sed velit quae fuga eius dolores ex repellat adipisci, sapiente blanditiis, molestias deserunt optio magnam ad aut esse nulla.',
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
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
              selected === i ? 'accordion__content-show' : 'accordion__content'
            }
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
