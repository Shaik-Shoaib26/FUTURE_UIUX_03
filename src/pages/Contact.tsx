import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SectionHeading } from '../App';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Contact Form */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
           >
             <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send us a message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                   <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="john@example.com" />
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                   <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="(123) 456-7890" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Event Type</label>
                   <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow appearance-none">
                     <option>Wedding</option>
                     <option>Corporate Event</option>
                     <option>Private Party</option>
                     <option>Other</option>
                   </select>
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                 <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow resize-none" placeholder="Tell us a little about your event..."></textarea>
               </div>

               <button type="submit" className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2">
                 Send Message <Send size={20} />
               </button>
             </form>
           </motion.div>

           {/* Contact Info */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-col justify-center space-y-12"
           >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Prefer to reach out directly? Use the information below. Our team aims to respond to all inquiries within 24 business hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <MapPin className="text-purple-700 dark:text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Office Address</h4>
                      <p className="text-slate-600 dark:text-slate-400">123 EventCraft Management, Hindupur, 515201</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <Phone className="text-purple-700 dark:text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Phone</h4>
                      <p className="text-slate-600 dark:text-slate-400">9030293102<br />Mon-Fri, 9am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <Mail className="text-purple-700 dark:text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">Email</h4>
                      <p className="text-slate-600 dark:text-slate-400">shaikshoaib436@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Map View" className="w-full h-full object-cover mix-blend-luminosity opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-full shadow-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                       <MapPin className="text-amber-500" size={20} /> EventCraft HQ
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
