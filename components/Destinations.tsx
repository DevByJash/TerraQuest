
import React from 'react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      name: "Dolomite Spires",
      desc: "Limestone peaks that glow pink at sunset, offering world-class climbing routes.",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
      type: "Alpine"
    },
    {
      name: "Patagonia Wilds",
      desc: "The ultimate edge of the world, where glaciers meet rugged granite towers.",
      img: "https://images.unsplash.com/photo-1517704130591-7899581ec61a?auto=format&fit=crop&q=80&w=800",
      type: "Tundra",
      featured: true
    },
    {
      name: "Nordic Fjords",
      desc: "Crystal blue waters winding through sheer cliffs of incredible majesty.",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
      type: "Coastal"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="px-6 md:px-16 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase font-display mb-4">Investment in Memory</h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Convert your resources into unforgettable stories. Explore our most sought-after expedition zones.
        </p>
      </div>

      <div className="relative px-6 md:px-16">
        {/* Navigation Buttons */}
        <button className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-10 px-4 snap-x snap-mandatory">
          {destinations.map((dest, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 relative overflow-hidden rounded-[40px] shadow-2xl group snap-center transition-all duration-500 ${dest.featured ? 'w-80 md:w-[450px] h-[550px]' : 'w-72 md:w-80 h-[480px] self-center opacity-80'}`}
            >
              <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl">
                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>

              {/* Heart */}
              <div className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-red-500/80 backdrop-blur-md border border-white/20 rounded-2xl cursor-pointer transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">{dest.name}</h3>
                <p className="text-white/70 text-xs line-clamp-2 leading-relaxed mb-6">
                  {dest.desc}
                </p>
                <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-2">
                     <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{dest.type}</span>
                   </div>
                   <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold hover:bg-white hover:text-slate-900 transition-all">
                     <span>Details</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
