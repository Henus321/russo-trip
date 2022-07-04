import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './routes/home/home.component';
import Tours from './routes/tours/tours.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tours" element={<Tours />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
