
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-16">
      <div className="text-2xl font-bold text-white font-display">TerraQuest<span className="text-orange-400">!</span></div>
      
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-white/90">
        <a href="#" className="hover:text-white transition-colors">Expeditions</a>
        <a href="#" className="hover:text-white transition-colors">Our Story</a>
        <a href="#" className="hover:text-white transition-colors">Journal</a>
        <a href="#" className="hover:text-white transition-colors">Insights</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden md:block px-6 py-2 text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all">
          Login
        </button>
        <button className="px-6 py-2 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all shadow-lg">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
