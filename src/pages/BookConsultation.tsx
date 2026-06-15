import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    dateStr: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
  const submitForm = () => {
    setIsSubmitted(true);
    // Real implementation would submit data here
  };

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const isStepValid = () => {
    switch(step) {
      case 1: return formData.eventType !== '';
      case 2: return formData.dateStr !== '';
      case 3: return formData.guests !== '';
      case 4: return formData.name !== '' && formData.email !== '';
      default: return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-900 p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-slate-100 dark:border-slate-800"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Request Received!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Thank you, {formData.name}. We've received your consultation request for your upcoming {formData.eventType.toLowerCase()}. Our team will contact you within 24 hours to confirm a time.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-purple-700 text-white rounded-xl font-bold transition-colors hover:bg-purple-800"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-purple-700 dark:text-amber-500">Step {step} of 5</span>
            <span className="text-sm font-medium text-slate-500">
              {step === 1 && "Event Type"}
              {step === 2 && "Event Date"}
              {step === 3 && "Guest Count"}
              {step === 4 && "Contact Details"}
              {step === 5 && "Review & Confirm"}
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-700 dark:bg-amber-500 transition-all duration-500 ease-out"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[500px]">
             
             {/* Left - Main Form Area */}
             <div className="w-full md:w-2/3 p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  
                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What type of event are you planning?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Wedding', 'Corporate Event', 'Milestone Birthday', 'Private Party', 'Product Launch', 'Other'].map((type) => (
                          <div 
                            key={type}
                            onClick={() => updateForm('eventType', type)}
                            className={twMerge(
                              "p-4 border-2 rounded-xl cursor-pointer font-medium transition-all",
                              formData.eventType === type 
                                ? "border-purple-600 bg-purple-50 dark:border-amber-500 dark:bg-slate-800 text-purple-700 dark:text-amber-500" 
                                : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-slate-600"
                            )}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">When is the event?</h3>
                      <div className="space-y-4">
                         <div 
                           onClick={() => updateForm('dateStr', 'Not set yet (flexible)')}
                           className={twMerge(
                              "p-5 border-2 rounded-xl cursor-pointer font-medium transition-all mb-4",
                              formData.dateStr === 'Not set yet (flexible)'
                                ? "border-purple-600 bg-purple-50 dark:border-amber-500 dark:bg-slate-800 text-purple-700 dark:text-amber-500" 
                                : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                           )}
                         >
                           I'm flexible / Date not set
                         </div>
                         <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                           <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Or select a specific date / timeframe</label>
                           <input 
                             type="text" 
                             placeholder="e.g., Summer 2025 or Oct 15, 2024"
                             value={formData.dateStr !== 'Not set yet (flexible)' ? formData.dateStr : ''}
                             onChange={(e) => updateForm('dateStr', e.target.value)}
                             className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow text-lg" 
                           />
                         </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Estimated guest count?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Under 50', '50 - 100', '100 - 250', '250 - 500', '500+'].map((count) => (
                          <div 
                            key={count}
                            onClick={() => updateForm('guests', count)}
                            className={twMerge(
                              "p-4 border-2 rounded-xl cursor-pointer font-medium transition-all",
                              formData.guests === count 
                                ? "border-purple-600 bg-purple-50 dark:border-amber-500 dark:bg-slate-800 text-purple-700 dark:text-amber-500" 
                                : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                            )}
                          >
                            {count}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4 */}
                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your details</h3>
                      <div className="space-y-4">
                         <div>
                           <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                           <input type="text" value={formData.name} onChange={(e) => updateForm('name', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="Jane Doe" required />
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                             <input type="email" value={formData.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="jane@example.com" required />
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                             <input type="tel" value={formData.phone} onChange={(e) => updateForm('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow" placeholder="(555) 123-4567" />
                           </div>
                         </div>
                         <div>
                           <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Anything else to add?</label>
                           <textarea rows={3} value={formData.notes} onChange={(e) => updateForm('notes', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-shadow resize-none" placeholder="We have a rough Pinterest board..."></textarea>
                         </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Review & Confirm</h3>
                      
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl space-y-4 mb-6">
                        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                          <div className="text-sm text-slate-500 font-medium">Event Type</div>
                          <div className="col-span-2 font-semibold text-slate-900 dark:text-white">{formData.eventType}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                          <div className="text-sm text-slate-500 font-medium">Date</div>
                          <div className="col-span-2 font-semibold text-slate-900 dark:text-white">{formData.dateStr}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                          <div className="text-sm text-slate-500 font-medium">Guests</div>
                          <div className="col-span-2 font-semibold text-slate-900 dark:text-white">{formData.guests}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <div className="text-sm text-slate-500 font-medium">Contact</div>
                          <div className="col-span-2 font-semibold text-slate-900 dark:text-white">
                            {formData.name}<br/>
                            <span className="text-sm font-normal text-slate-600 dark:text-slate-400">{formData.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={submitForm}
                        className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                      >
                        Submit Request <CheckCircle2 size={20} />
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Navigation Buttons (Bottom) */}
                {step < 5 && (
                  <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button 
                      onClick={handleBack}
                      disabled={step === 1}
                      className={twMerge("flex items-center gap-2 font-semibold transition-colors", step === 1 ? "text-slate-300 dark:text-slate-700 cursor-not-allowed" : "text-slate-600 hover:text-purple-700 dark:text-slate-400 dark:hover:text-amber-500")}
                    >
                      <ChevronLeft size={20} /> Back
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={twMerge(
                        "flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all",
                        isStepValid() 
                         ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200" 
                         : "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed"
                      )}
                    >
                      Next <ChevronRight size={20} />
                    </button>
                  </div>
                )}
             </div>

             {/* Right - Contextual Sidebar */}
             <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-950 p-8 border-l border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-serif font-bold text-purple-700 dark:text-amber-500">?</span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Why book early?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our calendar fills up quickly, especially for peak seasons. A consultation helps secure your date and gives us a head start on vendor selection.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">What happens next?</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                    <li>We review your details</li>
                    <li>Schedule a video call</li>
                    <li>Draft an initial moodboard</li>
                    <li>Prepare a custom quote</li>
                  </ul>
                </div>
             </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
