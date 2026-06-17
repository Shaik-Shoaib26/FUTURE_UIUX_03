import { saveBooking, type BookingPayload } from './supabaseClient';

let emailjs: typeof import('@emailjs/browser').default | null = null;
try {
  emailjs = require('@emailjs/browser').default;
} catch {
  // EmailJS package not available; email sending will be disabled gracefully.
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID ?? '';
const customerTemplateId = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID ?? '';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL ?? '';

function isEmailJsConfigured() {
  return Boolean(serviceId && ownerTemplateId && customerTemplateId && publicKey && businessEmail && emailjs);
}

function buildTemplateParams(booking: BookingPayload) {
  return {
    event_type: booking.eventType,
    event_date: booking.dateStr,
    guest_count: booking.guests,
    client_name: booking.name,
    client_email: booking.email,
    client_phone: booking.phone || 'Not provided',
    client_notes: booking.notes || 'No additional notes provided',
    business_email: businessEmail,
  };
}

export async function submitBooking(booking: BookingPayload) {
  const { error } = await saveBooking(booking);

  if (error) {
    throw new Error(error.message || 'Unable to save booking to Supabase.');
  }

  if (!isEmailJsConfigured()) {
    console.warn('EmailJS is not configured. Booking saved to Supabase, but confirmation emails were not sent.');
    return;
  }

  const templateParams = buildTemplateParams(booking);

  await Promise.all([
    emailjs!.send(serviceId, ownerTemplateId, {
      ...templateParams,
      recipient_email: businessEmail,
      recipient_name: 'EventCraft Team',
      email_subject: `New Booking Request from ${booking.name}`,
    }, publicKey),
    emailjs!.send(serviceId, customerTemplateId, {
      ...templateParams,
      recipient_email: booking.email,
      recipient_name: booking.name,
      email_subject: `Booking Confirmation for your ${booking.eventType}`,
    }, publicKey),
  ]);
}
