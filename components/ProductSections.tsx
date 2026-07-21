"use client";
import { FEATURE_HIGHLIGHTS, CATEGORIES, PRODUCTS } from "@/lib/data";

export function SearchBand() {
  const handleTagClick = (text: string) => {
    const el = document.getElementById("mainsearch") as HTMLInputElement | null;
    if (el) {
      el.value = text;
      el.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="searchband">
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
          <button className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            Search
          </button>
        </div>
        <div className="quick-tags reveal d1">
          <span className="lbl">Popular:</span>
          {["Compressors", "Dispensers", "Cascade", "CBG", "Biogas", "Valves"].map((t) => (
            <span key={t} className="tag" onClick={() => handleTagClick(t)}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureHighlights() {
  return (
    <section className="section" style={{ paddingTop: 80 }}>
      <div className="wrap">
        <div className="feat-grid">
          {FEATURE_HIGHLIGHTS.map((f, i) => (
            <div key={f.title} className={`feat-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="feat-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: f.icon }} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  const delays = ["", " d1", " d2", " d3", " d4", " d5", "", " d1", " d2", " d3", " d4", " d5"];
  return (
    <section className="section" id="categories" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" />Browse the Marketplace</span>
          <h2 className="reveal d1">Shop by <span className="grad-text">Category</span></h2>
          <p className="reveal d2">Everything you need to build, run and maintain alternative fuel infrastructure — organised for fast B2B procurement.</p>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((cat, i) => (
            <a key={cat.label} className={`cat reveal${delays[i] || ""}`}>
              <div className="cat-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: cat.icon }} />
              </div>
              <span>{cat.label}</span>
              <small>{cat.sub}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  const delays = ["", " d1", " d2", " d3", "", " d1", " d2", " d3"];
  return (
    <section className="section" id="products" style={{ background: "linear-gradient(180deg,var(--bg),#fff)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" />Handpicked Listings</span>
          <h2 className="reveal d1">Featured <span className="grad-text">Equipment</span></h2>
          <p className="reveal d2">Live listings from verified manufacturers, ready for quotation and bulk order.</p>
        </div>
        <div className="prod-grid">
          {PRODUCTS.map((p, i) => (
            <div key={p.t} className={`prod reveal${delays[i] || ""}`}>
              <div className="prod-img">
                <span dangerouslySetInnerHTML={{ __html: p.ic }} />
                <span className="prod-badge">{p.b}</span>
                <span className="prod-verify">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5 9-9" />
                  </svg>
                </span>
              </div>
              <div className="prod-body">
                <h3>{p.t}</h3>
                <div className="prod-cat">{p.c}</div>
                <div className="prod-seller">
                  <span className="sd">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </span>
                  {p.s}
                </div>
                <div className="prod-foot">
                  <div className="prod-price">
                    <small>Starting from</small>
                    <b>{p.p}</b>
                  </div>
                  <div className="prod-actions">
                    <button className="mini-btn o">Details</button>
                    <button className="mini-btn g">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }} className="reveal">
          <a href="#" className="btn btn-ghost">
            View all products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
