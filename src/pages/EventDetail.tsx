import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolio } from '../data/mockData';
import { SectionHeading } from '../App';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function EventDetail() {
  const { id } = useParams();
  const event = portfolio.find(p => p.id === id) || portfolio[0];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors mb-8 font-medium">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <div className="w-full h-[50vh] rounded-3xl overflow-hidden mb-12 relative">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-3 block">{event.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex items-center gap-2 text-slate-300">
               <MapPin size={18} /> {event.location} &nbsp;|&nbsp; Client: {event.client}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose prose-lg dark:prose-invert prose-purple">
             <h2 className="text-slate-900 dark:text-white">Event Overview</h2>
             <p className="text-slate-600 dark:text-slate-400">
               For {event.title}, our team was tasked with creating an unforgettable atmosphere that blended modern luxury with timeless elegance. From the initial conceptualization phase to the final execution, every single detail was meticulously planned to ensure maximum impact.
             </p>
             <p className="text-slate-600 dark:text-slate-400">
               The venue, {event.location}, provided a stunning backdrop, which we enhanced with custom lighting design, bespoke floral arrangements, and premium staging.
             </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl h-fit border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6">Want something similar?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Let's create something extraordinary for your next event.
            </p>
            <Link to="/book" className="block text-center w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
