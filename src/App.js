import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contacts from './routes/contacts/contacts.component';
import SignIn from './routes/sign-in/sign-in.component';
import Registration from './routes/registration/registration.component';
import Pathways from './components/pathways/pathways.component';
import PathwaysItem from './components/pathways-item/pathways-item.component';
import CreatePathway from './routes/create-pathway/create-pathway.component';
import PrivateRoute from './components/private-route/private-route.component';
import Profile from './routes/profile/profile.component';
import Footer from './components/footer/footer.component';

import './App.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="registration" element={<Registration />} />
        <Route path="city/:cityName" element={<Pathways />} />
        <Route path="city/:cityName/:pathwayId" element={<PathwaysItem />} />
        <Route path="create-pathway" element={<CreatePathway />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
