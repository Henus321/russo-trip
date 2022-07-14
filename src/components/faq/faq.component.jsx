import video from '../../assets/video.mp4';
import Accordion from '../accordion/accordion.component';

import './faq.styles.scss';

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq__bg-content">
        <img
          className="faq__bg-photo"
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="FAQ Background"
        ></img>
      </div>
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <span className="faq__under-title">
        Do you want to know all the details?
      </span>
      <Accordion />
    </div>
  );
};

export default Faq;
