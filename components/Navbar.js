import React, { useState } from 'react';

const e = React.createElement;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return e('nav', { className: 'absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-16' },
    e('div', { className: 'text-2xl font-bold text-white font-display' },
      'TerraQuest',
      e('span', { className: 'text-orange-400' }, '!')
    ),
    
    // Desktop Nav
    e('div', { className: 'hidden md:flex items-center space-x-10 text-sm font-medium text-white/90' },
      ['Expeditions', 'Our Story', 'Journal', 'Insights', 'Support'].map(item => 
        e('a', { key: item, href: '#', className: 'hover:text-white transition-colors' }, item)
      )
    ),

    e('div', { className: 'flex items-center space-x-4' },
      e('button', { 
        className: 'hidden md:block px-6 py-2 text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all',
        onClick: () => alert('Login Clicked')
      }, 'Login'),
      e('button', { 
        className: 'px-6 py-2 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all shadow-lg',
        onClick: () => alert('Join Process Started')
      }, 'Join Now'),
      // Mobile Toggle
      e('button', {
        className: 'md:hidden text-white',
        onClick: () => setIsOpen(!isOpen)
      }, 
        e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7' })
        )
      )
    ),

    // Mobile Menu
    isOpen && e('div', { className: 'absolute top-20 left-6 right-6 bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 flex flex-col space-y-4 md:hidden border border-white/10' },
      ['Expeditions', 'Our Story', 'Journal', 'Insights', 'Support'].map(item => 
        e('a', { key: item, href: '#', className: 'text-white text-lg font-bold' }, item)
      )
    )
  );
};

export default Navbar;