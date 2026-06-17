import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase client not initialised. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment to enable booking storage.');
}

export interface BookingPayload {
  eventType: string;
  dateStr: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export { supabase };

export async function saveBooking(booking: BookingPayload) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Booking cannot be saved.');
  }
  return await supabase.from('bookings').insert([{
    event_type: booking.eventType,
    event_date: booking.dateStr,
    guest_count: booking.guests,
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    budget: booking.notes,
    created_at: new Date().toISOString(),
  }]);
}
