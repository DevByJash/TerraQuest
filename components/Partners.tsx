
import React from 'react';

const Partners: React.FC = () => {
  const logos = [
    { name: 'Lattice', icon: '✦' },
    { name: 'monday.com', icon: '●' },
    { name: 'Contentful', icon: '■' },
    { name: 'productboard', icon: '▲' },
    { name: 'customer.io', icon: '○' }
  ];

  return (
    <div className="py-20 border-y border-slate-100 bg-white">
      <div className="px-6 md:px-16 overflow-hidden">
        <div className="flex flex-wrap items-center justify-around gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-slate-900">{logo.icon}</span>
              <span className="text-xl font-black text-slate-900 font-display uppercase tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
