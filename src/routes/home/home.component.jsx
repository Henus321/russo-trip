import SwiperOffers from '../../components/swiper-offers/swiper-offers.component';
import Pathways from '../../components/pathways/pathways.component';
import Safety from '../../components/safety/safety.component';
import Reviews from '../../components/reviews/reviews.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className="home">
      <SwiperOffers />
      <Pathways />
      <Safety />
      <Reviews />
    </main>
  );
};

export default Home;
