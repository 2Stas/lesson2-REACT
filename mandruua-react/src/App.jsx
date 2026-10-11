import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Tours from './pages/Tours.jsx';
import Contacts from './pages/Contacts.jsx';
import Roulette from './pages/Roulette.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
