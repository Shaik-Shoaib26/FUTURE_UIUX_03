import React from 'react';
import { SectionHeading } from '../App';

export default function DesignRationale() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Design Rationale" subtitle="UI/UX Case Study" center={false} />
        
        <div className="prose prose-lg dark:prose-invert prose-purple max-w-none text-slate-700 dark:text-slate-300">
           
           <h2 className="text-slate-900 dark:text-white">1. Executive Summary & Brand Identity</h2>
           <p>
             The "EventCraft" digital experience was architected to convey trust, luxury, and absolute competence. We selected a premium brand palette: Deep Purple (#6D28D9) to signify creativity, ambition, and luxury, paired with Gold/Amber (#F59E0B) for accents, warmth, and prestige. 
           </p>

           <h2 className="text-slate-900 dark:text-white mt-12">2. Target Audience & Personas</h2>
           <p>
             <strong>Primary Users:</strong> Affluent couples planning weddings, corporate HR/Marketing directors organizing summits, and individuals celebrating high-budget milestones.
           </p>
           <p>
             <strong>User Goals:</strong> These users are time-poor but demand high quality. They aren't looking for "cheap"; they are looking for "flawless execution." The design mitigates their anxiety by heavily pushing visual proof (portfolio imagery) and social proof (testimonials, statistics).
           </p>

           <h2 className="text-slate-900 dark:text-white mt-12">3. Strategic UX Decisions</h2>
           <ul className="list-disc pl-6 space-y-3">
             <li><strong>Visual Hierarchy:</strong> The homepage uses alternating layout rhythms (centered text, then grids, then asymmetrical process sections) to keep the eye engaged without fatigue.</li>
             <li><strong>Conversion Funnel:</strong> The multi-step "Book Consultation" form replaces a traditional, intimidating long-form contact page. By chunking the booking process (Event Type → Date → Guests → Budget → Contact Details), cognitive load is decreased, significantly boosting completion rates (the "Foot in the Door" technique).</li>
             <li><strong>Dark Mode Utility:</strong> Event imagery often pops beautifully against dark backgrounds. We implemented a first-class dark mode (which leans into a deep slate rather than pure black) to elevate the "nightlife/gala" aesthetic when toggled.</li>
             <li><strong>Sticky Navigation with State:</strong> The navbar transitions from transparent (blending into the hero image) to a frosted glassmorphism effect on scroll, ensuring wayfinding is always accessible without eating screen real estate.</li>
           </ul>

           <h2 className="text-slate-900 dark:text-white mt-12">4. Motion & Animation (Framer Motion)</h2>
           <p>
             We utilized <code>framer-motion</code> strictly for purposeful micro-interactions, avoiding "slop" or distracting bouncy effects:
           </p>
           <ul className="list-disc pl-6 space-y-3">
             <li><strong>Scroll Reveal:</strong> Components gently fade and slide up (`translateY: 20px` to `0`) sequentially (`staggerChildren`) to draw the eye down the page.</li>
             <li><strong>Hover States:</strong> Subtle scale transforms (`1.05`) on portfolio images create tactility. Buttons utilize shadow expansion rather than color flashing to feel more premium.</li>
           </ul>

           <h2 className="text-slate-900 dark:text-white mt-12">5. Accessibility & Responsive Implementation</h2>
           <p>
             Built completely mobile-first using Tailwind CSS. Touch targets on the mobile menu and form inputs exceed the 44px WCAG recommendation. Color contrast ratios between text and backgrounds have been verified (especially in dark mode where slate-400 against slate-900 passes AA rating).
           </p>
        </div>
      </div>
    </div>
  );
}
