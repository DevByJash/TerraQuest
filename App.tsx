
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Destinations />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
