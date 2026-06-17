import { sendOwnerBookingNotification } from './emailService';
import { saveBooking, type BookingPayload } from './supabaseClient';

export async function submitBooking(booking: BookingPayload) {
  const { error } = await saveBooking(booking);

  if (error) {
    throw new Error(error.message || 'Unable to save booking to Supabase.');
  }

  console.log('Booking saved to Supabase successfully.');

  const ownerNotified = await sendOwnerBookingNotification(booking);

  if (!ownerNotified) {
    console.warn('Booking saved, but the business owner EmailJS notification was not sent.');
  }
}
