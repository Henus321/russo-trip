import SwiperOffers from '../../components/swiper-offers/swiper-offers.component';

import Cities from '../../components/cities/cities.component';
import Safety from '../../components/safety/safety.component';
import Reviews from '../../components/reviews/reviews.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className="home">
      <SwiperOffers />
      <Cities />
      {/* <Pathways /> */}
      <Safety />
      <Reviews />
    </main>
  );
};

export default Home;
