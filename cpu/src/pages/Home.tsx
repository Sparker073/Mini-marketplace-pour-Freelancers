import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceList from '../components/ServiceList';
import ExpertCarousel from '../components/ExpertCarousel';
import CategoryFilter from '../components/CategoryFilter';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#091837]">
      <div id="services">
        <ServiceList />
      </div>
      <CategoryFilter />
      <div id="experts">
        <ExpertCarousel />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <FAQ />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;