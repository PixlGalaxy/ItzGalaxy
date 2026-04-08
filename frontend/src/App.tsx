import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import DurazznoApp from './pages/DurazznoApp';
import Pixl from './pages/Pixl';
import PixlTOS from './pages/Pixltos';
import ItzGalaxyMCNetwork from './pages/ItzGalaxyMCNetwork';
import Terminal from './pages/Terminal';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/durazznoapp" element={<DurazznoApp />} />
            <Route path="/pixl" element={<Pixl />} />
            <Route path="/pixl-tos" element={<PixlTOS />} />
            <Route path="/itzgalaxymcnetwork" element={<ItzGalaxyMCNetwork />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
