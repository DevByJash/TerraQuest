import React from 'react';

const e = React.createElement;

const Footer = () => {
  return e('footer', { className: 'bg-slate-50 pt-24 pb-12 px-6 md:px-16' },
    e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20' },
      e('div', { className: 'lg:col-span-2' },
        e('div', { className: 'text-3xl font-bold text-slate-900 font-display mb-6' }, 'TerraQuest', e('span', { className: 'text-orange-400' }, '!')),
        e('p', { className: 'text-slate-500 text-sm mb-8 max-w-xs' }, 'The wild is calling, and your story is yet to be written.'),
        e('div', { className: 'flex space-x-4' }, ['FB', 'TW', 'IG'].map(s => e('a', { key: s, href: '#', className: 'w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all' }, e('span', { className: 'text-[10px] font-bold' }, s))))
      ),
      ['Adventures', 'Our World', 'Connect'].map(title => e('div', { key: title },
        e('h4', { className: 'font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest' }, title),
        e('ul', { className: 'space-y-4 text-sm text-slate-500' }, 
          ['Link 1', 'Link 2', 'Link 3'].map(l => e('li', { key: l }, e('a', { href: '#', className: 'hover:text-slate-900' }, l)))
        )
      ))
    ),
    e('div', { className: 'pt-8 border-t border-slate-200 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest' },
      e('p', null, '© 2024 TerraQuest Expeditions.'),
      e('div', { className: 'flex space-x-8' }, e('a', { href: '#' }, 'Privacy'), e('a', { href: '#' }, 'Terms'))
    )
  );
};

export default Footer;