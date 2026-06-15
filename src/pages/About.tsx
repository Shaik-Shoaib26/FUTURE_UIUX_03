import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../App';
import { team } from '../data/mockData';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               className="order-2 lg:order-1"
            >
               <SectionHeading title="Our Story" subtitle="About Us" center={false} />
               <div className="prose prose-lg dark:prose-invert prose-purple text-slate-600 dark:text-slate-400">
                 <p>
                   Founded in 2012, EventCraft began with a simple belief: every milestone deserves to be celebrated perfectly. What started as a small two-person operation planning elegant dinner parties has grown into one of the city's premier event management agencies.
                 </p>
                 <p>
                   We don't just plan events; we architect experiences. Our approach combines meticulous logistical planning with bold, creative design. We have built our reputation on our ability to transform ordinary spaces into magical environments, creating immersive experiences that guests remember for a lifetime.
                 </p>
                 <p>
                   Today, EventCraft manages over 100 high-end events annually, ranging from intimate luxury weddings to large-scale corporate summits, always delivering our signature touch of elegance and absolute perfection.
                 </p>
               </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="order-1 lg:order-2 relative"
            >
               <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Our Team Planning" className="w-full h-full object-cover" />
               </div>
               
               {/* Floating Stat Card */}
               <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-4xl font-bold text-amber-500 mb-1">12+</div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest">Years of Excellence</div>
               </div>
            </motion.div>
         </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-purple-900 dark:bg-slate-900 py-24 text-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
             <div className="md:pr-16">
               <h3 className="text-3xl font-bold mb-6 text-amber-400">Our Mission</h3>
               <p className="text-xl text-purple-200 dark:text-slate-300 font-light leading-relaxed">
                 To seamlessly orchestrate spectacular events that exceed expectations, allowing our clients to be guests at their own celebrations.
               </p>
             </div>
             <div className="pt-16 md:pt-0 md:pl-16">
               <h3 className="text-3xl font-bold mb-6 text-amber-400">Our Vision</h3>
               <p className="text-xl text-purple-200 dark:text-slate-300 font-light leading-relaxed">
                 To set the global standard for luxury event management, pushing the boundaries of creative design and flawless execution.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Meet The Experts" subtitle="Our Team" center={true} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
             <motion.div 
               key={member.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group"
             >
               <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4 bg-slate-100 dark:bg-slate-800">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
               <p className="text-purple-600 dark:text-amber-500 font-medium">{member.role}</p>
             </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
