import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../App';
import { pricing, faq } from '../data/mockData';
import { twMerge } from 'tailwind-merge';

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading title="Transparent Pricing" subtitle="Our Packages" />
        
        <div className="text-center md:max-w-2xl mx-auto mb-16 text-slate-600 dark:text-slate-400">
          <p>
            Choose the level of support you need. Each package is a starting point and can be customized to perfectly fit your event's unique requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {pricing.map((plan, idx) => (
             <motion.div 
               key={plan.name}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className={twMerge(
                 "relative rounded-3xl p-8 lg:p-10 flex flex-col border",
                 plan.popular 
                   ? "bg-slate-900 text-white border-slate-800 shadow-2xl transform lg:-translate-y-4 shadow-purple-900/20" 
                   : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800"
               )}
             >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={twMerge("mb-8 h-12", plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400")}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={twMerge("ml-2 font-medium", plan.popular ? "text-slate-400" : "text-slate-500")}>Starting at</span>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={twMerge("mt-1 shrink-0", plan.popular ? "text-amber-400" : "text-purple-600 dark:text-amber-500")} size={18} />
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/book"
                  className={twMerge(
                    "w-full py-4 rounded-xl font-bold transition-all text-center mt-auto",
                    plan.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-900"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                  )}
                >
                  Book Consultation
                </Link>
             </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" subtitle="Got Questions?" />
          <div className="space-y-6">
             {faq.map((item, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex gap-3">
                    <Info className="text-amber-500 shrink-0 mt-1" size={20} />
                    {item.question}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 pl-8 leading-relaxed">
                    {item.answer}
                  </p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
