import Cities from '../../components/cities/cities.component';
import Pathways from '../../components/pathways/pathways.component';
import Safety from '../../components/safety/safety.component';
import Reviews from '../../components/reviews/reviews.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className="home">
      <Cities />
      <Pathways />
      <Safety />
      <Reviews />
    </main>
  );
};

export default Home;
