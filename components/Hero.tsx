
import React from 'react';

const Hero: React.FC = () => {
  const facilities = [
    'Private Guide', 'Full Gear Kit', 'Eco Lodging', 'Expedition Plan',
    'Satellite Comm', 'Safety Gear', 'Gourmet Meals'
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
          alt="Mountain Range" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 flex flex-col items-center md:items-start text-center md:text-left mt-20">
        {/* Social and Stats */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
          <div className="flex items-center space-x-[-12px] mb-4 md:mb-0">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                alt="User"
              />
            ))}
            <span className="ml-4 text-xs font-semibold text-white bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              120K+ Explorers Trusted Us
            </span>
          </div>

          <div className="hidden lg:block max-w-xs">
            <h3 className="text-white font-display font-bold text-xl mb-2">Seeking Adventure?</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Experience the wild like never before. From alpine ridges to deep forests, we curate moments that transcend ordinary travel.
            </p>
          </div>

          {/* Social Icons */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-6 md:right-16 hidden md:flex">
             {['IG', 'FB', 'LN', 'TW'].map(s => (
               <a key={s} href="#" className="text-white/60 hover:text-white transition-colors font-bold text-xs">{s}</a>
             ))}
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase font-display tracking-tighter">
            Architecting <br />
            <span className="relative">
               Adventures
               <span className="absolute -inset-x-2 -inset-y-1 bg-white/10 backdrop-blur-sm rounded-lg -z-10"></span>
            </span> <br />
            <span className="text-outline">Beyond</span> <span className="italic text-orange-400">Maps.</span>
          </h1>
        </div>

        {/* Facilities Section */}
        <div className="w-full mt-auto pb-10">
          <div className="flex flex-col md:flex-row items-end justify-between">
            <div className="w-full md:w-2/3">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Prime Amenities Included :</p>
              <div className="flex flex-wrap gap-2">
                {facilities.map((f) => (
                  <span key={f} className="px-4 py-2 text-[10px] md:text-xs font-medium text-white/90 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/20 transition-all cursor-default">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
              <button className="group flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-sm shadow-2xl hover:bg-orange-400 hover:text-white transition-all">
                <span>Start Consultation</span>
                <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <p className="mt-4 text-[10px] text-white/40 max-w-[240px] text-right leading-tight">
                Join our expert strategists to build a journey tailored to your soul's craving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
