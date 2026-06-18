import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, Calendar, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface BookingData {
  eventType: string;
  dateStr: string;
  guests: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
}

const SUPPORT_EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || 'shaikshoaib436@gmail.com';

export default function BookingSuccess() {
  const location = useLocation();
  const booking: BookingData | undefined = location.state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 px-4">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No Booking Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">It looks like you haven't submitted a booking yet.</p>
          <Link to="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold transition-colors">
            Start Booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-8 sm:p-12 text-center border-b border-slate-100 dark:border-slate-800 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-900/10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/10"
              >
                <CheckCircle2 size={48} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                  Booking Confirmed!
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{booking.name}</span>. Your {booking.eventType.toLowerCase()} booking has been saved.
                </p>
              </motion.div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                      <Calendar size={18} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Event Details</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Type</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{booking.eventType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Date</p>
                      <p className="text-slate-900 dark:text-white font-medium">{booking.dateStr}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Guest Count</p>
                      <p className="text-slate-900 dark:text-white font-medium flex items-center gap-2">
                        <Users size={14} className="text-slate-400" />
                        {booking.guests}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Budget</p>
                      <p className="text-slate-900 dark:text-white font-medium">{booking.budget || 'Not specified'}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Contact Details</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Name</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{booking.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${booking.email}`} className="text-purple-700 dark:text-purple-400 hover:underline font-medium break-all">
                        {booking.email}
                      </a>
                    </div>
                    {booking.phone && (
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                        <a href={`tel:${booking.phone.replace(/\D/g, '')}`} className="text-purple-700 dark:text-purple-400 hover:underline font-medium flex items-center gap-2">
                          <Phone size={14} className="text-slate-400" />
                          {booking.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="rounded-2xl border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-950/30 p-6 mb-8"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Booking received</h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Your booking has been saved and our team at <strong>{SUPPORT_EMAIL}</strong> has been notified. We'll be in touch shortly.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/book"
                  className="flex-1 py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-700/10"
                >
                  <ArrowLeft size={18} />
                  Book Another Event
                </Link>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Booking Inquiry - ${encodeURIComponent(booking.eventType)}&body=Hi EventCraft,%0D%0A%0D%0AI just booked a ${encodeURIComponent(booking.eventType)} for ${encodeURIComponent(booking.dateStr)}.%0D%0A%0D%0AName: ${encodeURIComponent(booking.name)}%0D%0AEmail: ${encodeURIComponent(booking.email)}%0D%0APhone: ${encodeURIComponent(booking.phone || 'N/A')}%0D%0A%0D%0ARegards,%0D%0A${encodeURIComponent(booking.name)}`}
                  className="flex-1 py-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Contact Support
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}