import React from 'react';

const e = React.createElement;

const Partners = () => {
  const logos = [
    { name: 'Lattice', icon: '✦' }, { name: 'monday.com', icon: '●' }, { name: 'Contentful', icon: '■' }, { name: 'productboard', icon: '▲' }, { name: 'customer.io', icon: '○' }
  ];

  return e('div', { className: 'py-20 border-y border-slate-100 bg-white' },
    e('div', { className: 'px-6 md:px-16 overflow-hidden' },
      e('div', { className: 'flex flex-wrap items-center justify-around gap-12 grayscale opacity-40' },
        logos.map((logo) => e('div', { key: logo.name, className: 'flex items-center space-x-2 cursor-pointer hover:opacity-100 transition-all' },
          e('span', { className: 'text-2xl font-bold text-slate-900' }, logo.icon),
          e('span', { className: 'text-xl font-black text-slate-900 font-display uppercase tracking-tight' }, logo.name)
        ))
      )
    )
  );
};

export default Partners;