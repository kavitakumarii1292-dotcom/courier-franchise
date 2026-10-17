import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import Home from './pages/Home';
import Franchise from './pages/Franchise';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="site-main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
