import Slider from '../../components/slider/slider.component';
import Cities from '../../components/cities/cities.component';
import Faq from '../../components/faq/faq.component';
import How from '../../components/how/how.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className="home">
      <Slider />
      <Cities />
      <Faq />
      <How />
    </main>
  );
};

export default Home;
