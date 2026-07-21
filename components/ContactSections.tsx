import { OFFICES } from "@/lib/data";

export function TopSearchBand() {
  return (
    <section className="searchband top">
      <div className="wrap">
        <div className="search-card reveal">
          <button className="search-cat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            All Categories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div className="search-sep" />
          <div className="search-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input id="mainsearch" type="text" placeholder="Search equipment — compressors, dispensers, cascade systems…" />
          </div>
          <a href="/#products" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            Search
          </a>
        </div>
        <div className="quick-tags reveal d1">
          <span className="lbl">Popular:</span>
          {["Compressors", "Dispensers", "Cascade", "Hydrogen", "Biogas", "Valves"].map((t) => (
            <a key={t} className="tag" href="/#products">{t}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactHero() {
  return (
    <section className="page-hero" id="home">
      <div className="hero-bg">
        <div className="blob g" />
        <div className="blob b" />
        <div className="grid-fade" />
      </div>
      <div className="wrap">
        <div className="ph-inner">
          <span className="eyebrow reveal"><span className="dot" />Contact Us</span>
          <h1 className="reveal d1">Let&rsquo;s talk <span className="grad-text">clean energy procurement</span></h1>
          <p className="reveal d2">
            Whether you&rsquo;re sourcing equipment, planning a station or need engineering support — our team responds fast. Reach out and we&rsquo;ll get back within one business day.
          </p>
          <div className="hero-cta reveal d3">
            <a href="#contact-form" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15h6" />
              </svg>
              Send a message
            </a>
            <a href="tel:+919000000000" className="btn btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactMethodsSection() {
  return (
    <section className="section" style={{ paddingTop: 44 }}>
      <div className="wrap">
        <div className="feat-grid">
          <div className="feat-card reveal">
            <div className="feat-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Sales &amp; RFQ</h3>
            <p>
              <a href="tel:+919000000000" style={{ color: "var(--blue)", fontWeight: 600 }}>+91 90000 00000</a>
              <br />Mon&ndash;Sat, 9am&ndash;7pm IST
            </p>
          </div>
          <div className="feat-card reveal d1">
            <div className="feat-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:hello@sanmish.com" style={{ color: "var(--blue)", fontWeight: 600 }}>hello@sanmish.com</a>
              <br />Replies within 24 hours
            </p>
          </div>
          <div className="feat-card reveal d2">
            <div className="feat-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>
              <a href="#" style={{ color: "var(--blue)", fontWeight: 600 }}>Chat with support</a>
              <br />Fastest for quick queries
            </p>
          </div>
          <div className="feat-card reveal d3">
            <div className="feat-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Head Office</h3>
            <p>Baner, Pune<br />Maharashtra 411045, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactInfoPanel() {
  return (
    <div className="reveal d1">
      <div className="info-card">
        <div className="info-row">
          <div className="info-ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div><b>Head Office</b><span>SANMISH Clean Energy, Baner High Street, Pune, Maharashtra 411045, India</span></div>
        </div>
        <div className="info-row">
          <div className="info-ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div><b>Phone</b><a href="tel:+919000000000">+91 90000 00000</a></div>
        </div>
        <div className="info-row">
          <div className="info-ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
            </svg>
          </div>
          <div><b>Email</b><a href="mailto:hello@sanmish.com">hello@sanmish.com</a></div>
        </div>
        <div className="info-row">
          <div className="info-ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div><b>Working hours</b><span>Mon&ndash;Sat: 9:00am &ndash; 7:00pm IST<br />Sunday: Closed</span></div>
        </div>
        <div className="map-panel">
          <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" aria-label="Office location map">
            <defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7BB145" /><stop offset="1" stopColor="#3E79BD" /></linearGradient></defs>
            <rect width="520" height="260" fill="#eaf3fa" />
            <path d="M0 70 H520 M0 140 H520 M0 210 H520 M120 0 V260 M260 0 V260 M400 0 V260" stroke="#d3e0ec" strokeWidth="2" />
            <path d="M40 200 C120 150 180 180 240 120 S360 60 480 90" fill="none" stroke="#9fb6cb" strokeWidth="6" strokeLinecap="round" />
            <path d="M90 40 C150 60 130 120 200 130" fill="none" stroke="#c3d3e0" strokeWidth="5" strokeLinecap="round" />
            <circle cx="262" cy="118" r="30" fill="rgba(62,121,189,.12)" />
            <path d="M262 92c-13 0-23 10-23 23 0 17 23 33 23 33s23-16 23-33c0-13-10-23-23-23z" fill="url(#mg)" />
            <circle cx="262" cy="115" r="8" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function OfficesSection() {
  const pin = `<path d="M3 21h18M6 21V7l6-4 6 4v14M10 12h4M10 16h4"/>`;
  return (
    <section className="section love" id="offices">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" />Regional presence</span>
          <h2 className="reveal d1">Our <span className="grad-text">offices</span></h2>
          <p className="reveal d2">On-ground teams across India&rsquo;s key industrial corridors.</p>
        </div>
        <div className="office-grid">
          {OFFICES.map((o, i) => (
            <div key={o.city} className={`love-card reveal${i > 0 ? ` d${i}` : ""}`} style={{ textAlign: "left" }}>
              <div className="love-ic" style={{ margin: "0 0 16px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: pin }} />
              </div>
              <h3>{o.city}</h3>
              <p>{o.addr}<br />{o.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTASection() {
  return (
    <section className="cta" id="cta">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="rings a" /><div className="rings b" />
          <h2>Prefer to browse first?</h2>
          <p>Explore thousands of verified listings, or list your own products to reach serious industrial buyers across India.</p>
          <div className="cta-btns">
            <a href="/#products" className="btn btn-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Explore marketplace
            </a>
            <a href="/#cta" className="btn btn-light">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" />
              </svg>
              Become a seller
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
