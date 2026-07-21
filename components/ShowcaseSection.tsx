"use client";
import { useEffect, useRef, useState } from "react";
import { NEW_ARRIVALS, BEST_SELLING, DEALS } from "@/lib/data";

export default function ShowcaseSection() {
  const [dealIdx, setDealIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDealIdx(i => (i + 1) % DEALS.length);
    }, 4200);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="showcase-grid">

          {/* New Arrivals */}
          <div className="showcase-col reveal">
            <div className="col-head">
              <h3>New Arrivals</h3>
              <a href="#products">View all <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="mini-grid">
              {NEW_ARRIVALS.map((item, i) => (
                <div className="mini-prod" key={i}>
                  <div className="mini-thumb" dangerouslySetInnerHTML={{ __html: item.ic }} />
                  <h4>{item.t}</h4>
                  <div className="from">Starting from <b>{item.p}</b></div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Selling */}
          <div className="showcase-col reveal d1">
            <div className="col-head">
              <h3>Best Selling</h3>
              <a href="#products">View all <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="mini-grid">
              {BEST_SELLING.map((item, i) => (
                <div className="mini-prod" key={i}>
                  <div className="mini-thumb" dangerouslySetInnerHTML={{ __html: item.ic }} />
                  <h4>{item.t}</h4>
                  <div className="from">Starting from <b>{item.p}</b></div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Deals banner */}
          <div className="showcase-col deals reveal d2">
            <div className="col-head">
              <h3>Popular Deals</h3>
              <a href="#cta">Offers <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="deal-banner">
              {DEALS.map((deal, i) => (
                <div
                  key={i}
                  className={`deal-slide${i === dealIdx ? " active" : ""}`}
                  style={{ background: deal.dg } as React.CSSProperties}
                >
                  <small>{deal.tag}</small>
                  <h3>{deal.h}</h3>
                  <div className="off">{deal.off}<span>{deal.offSub}</span></div>
                  <a href="#cta" className="btn btn-white">
                    {deal.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              ))}
              <div className="deal-dots">
                {DEALS.map((_, i) => (
                  <button
                    key={i}
                    className={i === dealIdx ? "on" : ""}
                    onClick={() => setDealIdx(i)}
                    aria-label={`Deal ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
