import React from 'react';

const e = React.createElement;

const Testimonials = () => {
  const reviews = [
    { name: "Marcus Thorne", role: "Peak Climber", quote: "The Andes changed my perspective.", avatar: "https://picsum.photos/seed/marcus/100/100" },
    { name: "Elena Rossi", role: "Nature Blogger", quote: "Soul-stirring landscapes, impeccable safety.", avatar: "https://picsum.photos/seed/elena/100/100" },
    { name: "Kenji Sato", role: "Solo Traveler", quote: "A transformation, not just a trip.", avatar: "https://picsum.photos/seed/kenji/100/100" },
    { name: "Sarah Jenkins", role: "Alpine Runner", quote: "Technical gear was top-notch.", avatar: "https://picsum.photos/seed/sarah/100/100" }
  ];

  return e('section', { className: 'py-24 px-6 md:px-16 bg-white' },
    e('div', { className: 'flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8' },
      e('div', { className: 'max-w-xl' },
        e('h2', { className: 'text-4xl md:text-5xl font-black uppercase font-display mb-6' }, 'Echoes from the Heights'),
        e('p', { className: 'text-slate-500 text-sm' }, 'Hear from those who dared to step off the paved road.')
      ),
      e('div', { className: 'text-right' },
        e('span', { className: 'text-4xl font-black text-orange-500 font-display' }, '4.9/5'),
        e('p', { className: 'text-slate-400 text-[10px] uppercase font-bold mt-2' }, 'Overall Satisfaction')
      )
    ),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
      reviews.map((rev, idx) => e('div', { 
        key: idx, 
        className: 'p-8 rounded-[32px] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100' 
      },
        e('div', { className: 'flex items-center space-x-4 mb-8' },
          e('img', { src: rev.avatar, className: 'w-14 h-14 rounded-full border-2 border-white' }),
          e('div', null, e('h4', { className: 'font-bold text-sm' }, rev.name), e('p', { className: 'text-orange-500 text-[10px] font-bold uppercase' }, rev.role))
        ),
        e('p', { className: 'text-slate-600 text-xs italic mb-8' }, `"${rev.quote}"`),
        e('div', { className: 'flex items-center justify-between text-orange-400' },
          e('div', { className: 'flex' }, [...Array(5)].map((_, i) => e('svg', { key: i, className: 'w-3 h-3 fill-current', viewBox: '0 0 20 20' }, e('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' }))))
        )
      ))
    )
  );
};

export default Testimonials;