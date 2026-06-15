import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../data/mockData';
import { Filter, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Private Events'];
  
  const filteredPortfolio = filter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
           >
             Our Portfolio
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-slate-600 dark:text-slate-400 mb-10"
           >
             A curated selection of our finest past events, showcasing our commitment to excellence and high-end design.
           </motion.p>
           
           {/* Filters */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap items-center justify-center gap-2 md:gap-4"
           >
             {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === cat 
                      ? 'bg-purple-700 text-white shadow-md' 
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-purple-500'
                  }`}
                >
                  {cat}
                </button>
             ))}
           </motion.div>
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           <AnimatePresence>
             {filteredPortfolio.map((item, idx) => (
               <motion.div
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 key={item.id}
                 className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-200 dark:bg-slate-800"
               >
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                 <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 font-bold tracking-wider text-xs uppercase mb-2 inline-block px-3 py-1 bg-black/40 rounded-full w-max backdrop-blur-md">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                      <MapPin size={14} /> {item.location}
                    </div>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
