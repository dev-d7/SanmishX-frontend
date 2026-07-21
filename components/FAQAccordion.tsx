"use client";
import { useState } from "react";
import { CONTACT_FAQ } from "@/lib/data";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items = CONTACT_FAQ }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-wrap">
      {items.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={f.q} className={`faq reveal${i > 0 ? ` d${i % 4}` : ""}${open ? " open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {f.q}
              <span className="faq-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="faq-a" style={{ maxHeight: open ? "400px" : 0 }}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
