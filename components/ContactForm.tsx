"use client";
import { useState } from "react";
import { INQUIRY_TYPES } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="form-card reveal">
      <h3>Send us a message</h3>
      <p className="sub">Tell us about your requirement and we&rsquo;ll route it to the right team.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="cf-name">Full name</label>
            <input id="cf-name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="cf-company">Company</label>
            <input id="cf-company" name="company" type="text" placeholder="Company name" />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Work email</label>
            <input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="field">
            <label htmlFor="cf-phone">Phone</label>
            <input id="cf-phone" name="phone" type="tel" placeholder="+91 90000 00000" />
          </div>
          <div className="field full">
            <label htmlFor="cf-type">Inquiry type</label>
            <select id="cf-type" name="type" defaultValue={INQUIRY_TYPES[0]}>
              {INQUIRY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" name="message" placeholder="Share equipment, quantity, location or project details…" required />
          </div>
        </div>
        {!submitted && (
          <button type="submit" className="btn btn-primary form-submit">
            Send message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <div className={`form-success${submitted ? " show" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Thanks — your message has been received. Our team will get back within one business day.
        </div>
      </form>
    </div>
  );
}
