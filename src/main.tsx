import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import App from './App.tsx';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';
import BookingSuccess from './pages/BookingSuccess';
import DesignRationale from './pages/DesignRationale';
import EventDetail from './pages/EventDetail';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<BookConsultation />} />
          <Route path="booking-success" element={<BookingSuccess />} />
          <Route path="design-rationale" element={<DesignRationale />} />
          <Route path="event/:id" element={<EventDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
