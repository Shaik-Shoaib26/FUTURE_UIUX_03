# 🎉 EventCraft – Event Management & Booking Platform

EventCraft is a modern event booking and management platform designed to help customers plan and request event services online. Users can submit event booking requests, while administrators receive booking details instantly via email and can manage inquiries efficiently.

## 🌐 Live Demo

**Live Website:** https://eventcraft-management.vercel.app

---

## 🚀 Features

### Customer Features

* Event booking request form
* Multiple event categories

  * Wedding
  * Corporate Event
  * Birthday Party
  * Engagement Ceremony
  * Anniversary Celebration
* Guest count selection
* Budget estimation input
* Contact information submission
* Responsive mobile-friendly design
* Instant booking confirmation interface

### Admin Features

* Booking data stored securely in Supabase
* Real-time booking management
* Email notifications for new booking requests
* Customer contact information collection
* Professional event inquiry workflow

### Email Integration

* Automated owner notifications
* Customer inquiry tracking
* EmailJS integration for communication workflow

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS

### Backend & Database

* Supabase

  * Booking storage
  * Database management
  * Real-time data handling

### Email Service

* EmailJS

  * Owner booking notifications
  * Customer communication workflow

### Deployment

* Vercel

---

## 📊 Database Structure

### Bookings Table

| Field       | Type        |
| ----------- | ----------- |
| id          | bigint      |
| event_type  | text        |
| event_date  | text        |
| guest_count | text        |
| budget      | text        |
| name        | text        |
| email       | text        |
| phone       | text        |
| status      | text        |
| created_at  | timestamptz |

---

## 🔄 Booking Workflow

Customer Submits Booking Request

⬇

Booking Stored in Supabase

⬇

Owner Receives Email Notification

⬇

Booking Appears in Database

⬇

Admin Reviews Request

⬇

Customer Contacted for Confirmation

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablet
* Mobile Devices

---

## 🎯 Project Objectives

* Simplify event booking management
* Improve customer inquiry handling
* Demonstrate full-stack integration
* Showcase modern UI/UX design practices
* Implement real-world business workflow automation

---

## 📷 Screenshots

Add screenshots of:

* Homepage
* Services Page
* Booking Form
* Contact Page
* Mobile View
* Admin Dashboard (if implemented)

---

## 👨‍💻 Developer

**Shaik Shoaib**

Built as part of the **Future Interns UI/UX Design Internship Program (2026)**.

---

## 📄 License

This project is created for educational, portfolio, and internship purposes.
