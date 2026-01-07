import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Benefits from './components/Benefits.js';
import Destinations from './components/Destinations.js';
import Partners from './components/Partners.js';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer.js';

const e = React.createElement;

const App = () => {
  return e('div', { className: 'min-h-screen selection:bg-orange-200' },
    e(Navbar),
    e('main', null,
      e(Hero),
      e(Benefits),
      e(Destinations),
      e(Partners),
      e(Testimonials)
    ),
    e(Footer)
  );
};

export default App;