import emailjs from '@emailjs/browser';
import type { BookingPayload } from './supabaseClient';

export interface OwnerBookingNotificationPayload extends Record<string, unknown> {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  event_type: string;
  event_date: string;
  guest_count: string;
  budget_notes: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budgetNotes: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  client_notes: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  name: string;
  email: string;
  phone: string;
  mail: string;
  customer_mail: string;
  phone_number: string;
  budget: string;
  notes: string;
  message: string;
  formatted_message: string;
  formattedMessage: string;
  booking_details: string;
  event_details: string;
  business_email: string;
  to_email: string;
  to_name: string;
  recipient_email: string;
  recipient_name: string;
  subject: string;
  email_subject: string;
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID ?? '';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL ?? '';

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isConfigured(): boolean {
  return Boolean(serviceId && ownerTemplateId && publicKey && businessEmail);
}

export function buildOwnerBookingNotificationPayload(booking: BookingPayload): OwnerBookingNotificationPayload {
  const customerPhone = booking.phone || 'Not provided';
  const budgetNotes = booking.notes || 'No budget/notes provided';
  const formattedMessage = [
    `Customer Name: ${booking.name}`,
    `Customer Email: ${booking.email}`,
    `Customer Phone: ${customerPhone}`,
    `Event Type: ${booking.eventType}`,
    `Event Date: ${booking.dateStr}`,
    `Guest Count: ${booking.guests}`,
    `Budget/Notes: ${budgetNotes}`,
  ].join('\n');

  return {
    customer_name: booking.name,
    customer_email: booking.email,
    customer_phone: customerPhone,
    event_type: booking.eventType,
    event_date: booking.dateStr,
    guest_count: booking.guests,
    budget_notes: budgetNotes,
    customerName: booking.name,
    customerEmail: booking.email,
    customerPhone,
    eventType: booking.eventType,
    eventDate: booking.dateStr,
    guestCount: booking.guests,
    budgetNotes,
    client_name: booking.name,
    client_email: booking.email,
    client_phone: customerPhone,
    client_notes: budgetNotes,
    contact_name: booking.name,
    contact_email: booking.email,
    contact_phone: customerPhone,
    name: booking.name,
    email: booking.email,
    phone: customerPhone,
    mail: booking.email,
    customer_mail: booking.email,
    phone_number: customerPhone,
    budget: budgetNotes,
    notes: budgetNotes,
    message: formattedMessage,
    formatted_message: formattedMessage,
    formattedMessage,
    booking_details: formattedMessage,
    event_details: formattedMessage,
    business_email: businessEmail,
    to_email: businessEmail,
    to_name: 'EventCraft Team',
    recipient_email: businessEmail,
    recipient_name: 'EventCraft Team',
    subject: `New EventCraft Booking Request from ${booking.name}`,
    email_subject: `New EventCraft Booking Request from ${booking.name}`,
  };
}

export async function sendOwnerBookingNotification(booking: BookingPayload): Promise<boolean> {
  if (!isConfigured()) {
    console.warn('EmailJS owner notification skipped. Missing EmailJS environment variables.');
    return false;
  }

  try {
    emailjs.init(publicKey);

    const response = await emailjs.send(
      serviceId,
      ownerTemplateId,
      buildOwnerBookingNotificationPayload(booking),
      publicKey,
    );

    console.log('EmailJS owner notification sent successfully.', {
      recipient: businessEmail,
      templateId: ownerTemplateId,
      response,
    });

    return true;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error('EmailJS owner notification failed.', {
      recipient: businessEmail,
      templateId: ownerTemplateId,
      error: message,
    });

    return false;
  }
}
