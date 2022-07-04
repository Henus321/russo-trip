import Cities from '../../components/cities/cities.component';
import Pathways from '../../components/pathways/pathways.component';
import Safety from '../../components/safety/safety.component';

import './home.styles.scss';

const Home = () => {
  return (
    <main className="home">
      <Cities />
      <Pathways />
      <Safety />
    </main>
  );
};

export default Home;
