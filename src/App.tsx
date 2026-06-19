import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote, ArrowRight, Calendar, Users, Trophy, Sparkles, MapPin } from 'lucide-react';
import { services, portfolio, statistics, testimonials, faq } from './data/mockData';
import { twMerge } from 'tailwind-merge';

// Reusable Section Heading
export const SectionHeading = ({ title, subtitle, center = true }: { title: string, subtitle: string, center?: boolean }) => (
  <div className={twMerge("mb-16", center ? "text-center max-w-3xl mx-auto" : "")}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-6 mx-auto"
    >
      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-400">{subtitle}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-light font-serif text-slate-900 dark:text-white"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Event" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">Premium Event Management</span>
            </div>
            <h1 className="text-[50px] md:text-[84px] leading-[0.9] font-light mb-6 font-serif italic text-white drop-shadow-2xl">
              Creating <span className="text-amber-500 not-italic font-medium">Unforgettable</span><br />Experiences.
            </h1>
            <p className="text-lg md:text-xl md:max-w-2xl mx-auto text-slate-200 mb-10 font-light hidden sm:block leading-relaxed">
              From intimate gatherings to spectacular galas, we orchestrate every detail so you can focus on making memories. One event at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/book" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Planning <ArrowRight size={18} />
              </Link>
              <Link 
                to="/portfolio" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 text-white font-semibold text-sm uppercase tracking-widest transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 2. Statistics Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative z-20 -mt-10 rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.1)] dark:shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100 dark:divide-slate-800">
            {statistics.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 font-serif">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
               <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-400">Our Expertise</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-light font-serif text-slate-900 dark:text-white"
                >
                  Services We Offer
                </motion.h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-amber-500 font-semibold text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {service.price}
                  </div>
                </div>
                <p className="text-slate-500 font-light mb-6 line-clamp-2 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-900 dark:text-white hover:text-amber-500 transition-colors mt-auto"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <Link to="/services" className="md:hidden mt-8 w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 py-4 text-[10px] font-bold uppercase tracking-widest">
              View All Services
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Why EventCraft?" subtitle="Our Promise" center={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              { icon: <Trophy size={24} />, title: "Experienced Team", desc: "Over a decade of orchestrating flawless high-end events." },
              { icon: <Sparkles size={24} />, title: "Personalized Design", desc: "Every event is uniquely tailored to your specific vision." },
              { icon: <Users size={24} />, title: "Vendor Network", desc: "Exclusive access to the city's most premium vendors." },
              { icon: <Calendar size={24} />, title: "Stress-Free Execution", desc: "End-to-end management so you can actually enjoy your day." }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-slate-950 hover:bg-white/5 transition-colors group flex flex-col items-start"
              >
                <div className="text-slate-700 group-hover:text-amber-500 transition-colors mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif italic mb-3">{item.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Portfolio */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Masterpieces" subtitle="Featured Events" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.slice(0, 6).map((item, idx) => (
               <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={twMerge(
                    "group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto",
                    idx === 0 || idx === 3 ? "md:aspect-[4/5]" : "md:aspect-[4/3]"
                  )}
               >
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 font-medium tracking-wider text-sm uppercase mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin size={14} /> {item.location}
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-200 dark:border-white/10 text-[10px] uppercase tracking-widest text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                View Full Portfolio
             </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading title="Client Stories" subtitle="Testimonials" center={true} />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((test, idx) => (
               <motion.div
                 key={test.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="p-10 border border-slate-200 dark:border-slate-800"
               >
                 <div className="flex gap-1 text-amber-500 mb-6">
                   {[...Array(test.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-xl font-serif text-slate-900 dark:text-white leading-relaxed mb-8 italic">
                   "{test.content}"
                 </p>
                 <div className="flex items-center gap-4">
                   <img src={test.image} alt={test.author} className="w-12 h-12 rounded-full object-cover grayscale" />
                   <div>
                     <h4 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 dark:text-white mb-1">{test.author}</h4>
                     <span className="text-xs text-slate-500 font-light">{test.role}</span>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How We Work" subtitle="Our Process" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             {/* Desktop Process Line */}
             <div className="hidden md:block absolute top-[45px] left-0 right-0 h-[1px] bg-slate-200 dark:bg-slate-800 z-0" />
             
             {[
               { num: "01", title: "Consultation", desc: "We meet to discuss your ultimate vision, needs, and initial budget." },
               { num: "02", title: "Design & Plan", desc: "Our team creates a custom proposal, mood boards, and timelines." },
               { num: "03", title: "Execution", desc: "We coordinate vendors, logistics, and handle every tiny detail." },
               { num: "04", title: "Celebration", desc: "You enjoy a flawless event while we manage the behind-the-scenes." }
             ].map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 text-center md:text-left"
                >
                  <div className="w-24 h-24 mx-auto md:mx-0 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center mb-6 rounded-full border border-slate-200 dark:border-slate-800">
                    <span className="text-2xl italic font-serif text-amber-500">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-serif italic text-slate-900 dark:text-white mb-3 text-center md:text-left">{step.title}</h3>
                  <p className="text-slate-500 font-light text-sm text-center md:text-left leading-relaxed">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>



    </div>
  );
}
