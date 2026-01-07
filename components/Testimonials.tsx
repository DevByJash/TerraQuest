
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Thorne",
      role: "Peak Climber",
      rating: 4.8,
      quote: "The expedition to the Andes changed my perspective on physical limits. TerraQuest handled every detail perfectly.",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      name: "Elena Rossi",
      role: "Nature Blogger",
      rating: 5.0,
      quote: "Soul-stirring landscapes and impeccable safety standards. I felt supported at every altitude.",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    {
      name: "Kenji Sato",
      role: "Solo Traveler",
      rating: 4.9,
      quote: "Not just a trip, but a transformation. The cultural immersion and guide expertise were beyond words.",
      avatar: "https://picsum.photos/seed/kenji/100/100"
    },
    {
      name: "Sarah Jenkins",
      role: "Alpine Runner",
      rating: 5.0,
      quote: "The technical gear provided was top-notch. TerraQuest makes elite adventure accessible.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase font-display leading-none mb-6">
            Echoes from <br /> the Heights
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
            Hear from those who dared to step off the paved road and into the extraordinary.
          </p>
        </div>
        <div className="text-right">
           <span className="text-4xl font-black text-orange-500 font-display">4.9/5</span>
           <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-2">Overall Satisfaction</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="group p-8 rounded-[32px] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className="flex items-center space-x-4 mb-8">
              <img src={rev.avatar} alt={rev.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
              <div>
                <h4 className="font-bold text-sm font-display">{rev.name}</h4>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-tighter">{rev.role}</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-xs italic leading-relaxed mb-8">
              "{rev.quote}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="text-[10px] font-black text-slate-300">verified explorer</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
