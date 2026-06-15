import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../App';
import { services } from '../data/mockData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
           >
             Bespoke Services
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-slate-600 dark:text-slate-400"
           >
             Comprehensive event management tailored to your specific vision and meticulously executed to absolute perfection.
           </motion.p>
        </div>

        <div className="space-y-24">
           {services.map((service, index) => (
             <motion.div 
               key={service.id}
               id={service.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center scroll-mt-32`}
             >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                   <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                     <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-overlay" />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <span className="text-purple-600 dark:text-amber-500 font-semibold uppercase tracking-wider text-sm mb-4 block">
                      {service.price}
                   </span>
                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                     {service.title}
                   </h2>
                   <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                     {service.description}
                   </p>
                   
                   <div className="space-y-4 mb-10">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex items-start gap-3">
                         <CheckCircle2 className="text-amber-500 mt-1 shrink-0" size={20} />
                         <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                       </div>
                     ))}
                   </div>
                   
                   <Link 
                    to="/book" 
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                   >
                     Get a Quote <ArrowRight size={18} />
                   </Link>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
}
