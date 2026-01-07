import React, { useRef } from 'react';

const e = React.createElement;

const Destinations = () => {
  const scrollRef = useRef(null);
  const destinations = [
    { name: "Dolomite Spires", desc: "Limestone peaks that glow pink at sunset.", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", type: "Alpine" },
    { name: "Patagonia Wilds", desc: "The ultimate edge of the world, where glaciers meet rugged towers.", img: "https://images.unsplash.com/photo-1517704130591-7899581ec61a?auto=format&fit=crop&q=80&w=800", type: "Tundra", featured: true },
    { name: "Nordic Fjords", desc: "Crystal blue waters winding through sheer cliffs.", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", type: "Coastal" },
    { name: "Sahara Dunes", desc: "Vast golden sands under an infinite starlit sky.", img: "https://images.unsplash.com/photo-1509316785289-025f5d846b35?auto=format&fit=crop&q=80&w=800", type: "Arid" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return e('section', { className: 'py-24 bg-slate-50 overflow-hidden' },
    e('div', { className: 'px-6 md:px-16 mb-16 text-center' },
      e('h2', { className: 'text-4xl md:text-5xl font-black uppercase font-display mb-4' }, 'Investment in Memory'),
      e('p', { className: 'text-slate-500 text-sm max-w-lg mx-auto' }, 'Convert your resources into unforgettable stories.')
    ),
    e('div', { className: 'relative px-6 md:px-16' },
      e('button', { 
        className: 'absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all',
        onClick: () => scroll('left')
      }, e('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 19l-7-7 7-7' }))),
      e('button', { 
        className: 'absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all',
        onClick: () => scroll('right')
      }, e('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' }))),

      e('div', { ref: scrollRef, className: 'flex space-x-6 overflow-x-auto hide-scrollbar pb-10 px-4 snap-x snap-mandatory' },
        destinations.map((dest, i) => e('div', { 
          key: i, 
          className: `flex-shrink-0 relative overflow-hidden rounded-[40px] shadow-2xl group snap-center transition-all duration-500 ${dest.featured ? 'w-80 md:w-[450px] h-[550px]' : 'w-72 md:w-80 h-[480px] self-center opacity-80'}`
        },
          e('img', { src: dest.img, className: 'absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' }),
          e('div', { className: 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent' }),
          e('div', { className: 'absolute bottom-10 left-10 right-10' },
            e('h3', { className: 'text-2xl md:text-3xl font-bold text-white mb-3 font-display' }, dest.name),
            e('p', { className: 'text-white/70 text-xs mb-6' }, dest.desc),
            e('button', { 
              className: 'px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold hover:bg-white hover:text-slate-900 transition-all',
              onClick: (ev) => { ev.stopPropagation(); alert(`Viewing details for ${dest.name}`); }
            }, 'Details')
          )
        ))
      )
    )
  );
};

export default Destinations;