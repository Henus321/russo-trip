import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contacts from './routes/contacts/contacts.component';
import SignIn from './routes/sign-in/sign-in.component';
import Registration from './routes/registration/registration.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
