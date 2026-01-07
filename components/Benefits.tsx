
import React from 'react';

const Benefits: React.FC = () => {
  const benefitsList = [
    {
      title: "Soulful Connection",
      desc: "Travel breaks the routine, allowing you to reconnect with your inner self in environments designed by nature.",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Mental Resilience",
      desc: "Navigating unknown territories builds adaptability and strength, equipping you for life's everyday challenges.",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Global Perspective",
      desc: "Immersion in diverse cultures fosters empathy and a deeper understanding of our shared human narrative.",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Lifelong Wisdom",
      desc: "The lessons learned on a ridge or in a distant village are far more valuable than any textbook or degree.",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase font-display leading-none mb-6">
            Evolution <br /> Through Movement
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
            Exploration is not just seeing new landscapes, but gaining new eyes to perceive the world around you.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-slate-400 text-[10px] text-right mb-4 max-w-[200px]">
            Curated experiences focused on sustainable personal growth and ecological awareness.
          </p>
          <a href="#" className="group flex items-center space-x-2 text-sm font-bold text-slate-900">
            <span>Explore Benefits</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitsList.map((benefit, idx) => (
          <div key={idx} className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:shadow-md transition-shadow">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 font-display">{benefit.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
