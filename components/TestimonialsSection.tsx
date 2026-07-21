"use client";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

type Testimonial = { q: string; n: string; r: string; a: string };

export default function TestimonialsSection({
  items = TESTIMONIALS,
  eyebrow = "Client Stories",
  heading = (
    <>
      Trusted across the <span className="grad-text">energy industry</span>
    </>
  ),
}: {
  items?: Testimonial[];
  eyebrow?: ReactNode;
  heading?: ReactNode;
}) {
  const total = items.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer(); // clear any existing before starting new
    timerRef.current = setInterval(
      () => setIdx((i) => (i + 1) % total),
      5000
    );
  }, [stopTimer]);

  // Start on mount, clean up on unmount
  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const go = useCallback(
    (i: number) => {
      setIdx(((i % total) + total) % total);
      startTimer(); // reset timer on manual navigation
    },
    [startTimer]
  );

  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" />{eyebrow}</span>
          <h2 className="reveal d1">{heading}</h2>
        </div>

        <div
          className="testi-wrap reveal"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <div className="testi-track">
            <div
              className="testi-slides"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {items.map((t, i) => (
                <div className="testi" key={i}>
                  <div className="testi-card">
                    <div className="quote">&ldquo;</div>
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-text">{t.q}</p>
                    <div className="testi-person">
                      <div className="av">{t.a}</div>
                      <div>
                        <b>{t.n}</b>
                        <span>{t.r}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-nav">
            <button
              className="testi-arrow"
              onClick={() => go(idx - 1)}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot${i === idx ? " active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testi-arrow"
              onClick={() => go(idx + 1)}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
