
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="text-3xl font-bold text-slate-900 font-display mb-6">TerraQuest<span className="text-orange-400">!</span></div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
            The wild is calling, and your story is yet to be written. We are the ink for your next great adventure.
          </p>
          <div className="flex space-x-4">
             {['fb', 'tw', 'ig', 'ln'].map(s => (
               <a key={s} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
                  <span className="text-[10px] font-bold uppercase">{s}</span>
               </a>
             ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Adventures</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Summit Treks</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Desert Safari</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Polar Expeditions</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Group Packages</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Our World</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Core Philosophy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Green Policy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Expert Guides</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Press Inquiries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">24/7 Concierge</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Safety Protocols</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Office Locator</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Become a Guide</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © 2024 TerraQuest Expeditions. All Rights Reserved.
        </p>
        <div className="flex space-x-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-slate-900">Privacy Charter</a>
          <a href="#" className="hover:text-slate-900">Terms of Ascent</a>
          <a href="#" className="hover:text-slate-900">Cookie Data</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
