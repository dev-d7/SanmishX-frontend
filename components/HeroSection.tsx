"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const rotatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = ["CNG", "CBG", "Bio Gas"];
    let wi = 0;
    const interval = setInterval(() => {
      const rot = rotatorRef.current;
      if (!rot) return;
      rot.style.opacity = "0";
      rot.style.transform = "translateY(8px)";
      setTimeout(() => {
        wi = (wi + 1) % words.length;
        rot.textContent = words[wi];
        rot.style.transition = "opacity .4s,transform .4s";
        rot.style.opacity = "1";
        rot.style.transform = "none";
      }, 380);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bg = document.querySelector<HTMLElement>(".hero-bg");
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 800 && bg) bg.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="blob g" />
        <div className="blob b" />
        <div className="grid-fade" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal"><span className="dot" />India&rsquo;s Alternative Fuel Marketplace</span>
          <h1 className="reveal d1">
            India&rsquo;s Trusted Marketplace for<br />
            <span className="rotator grad-text" ref={rotatorRef}>CNG</span>
            <span className="grad-text"> Fuel Equipment</span>
          </h1>
          <p className="hero-sub reveal d2">
            Connecting buyers, manufacturers and industrial suppliers of clean energy infrastructure across India — from compressors and dispensers to full turnkey stations.
          </p>
          <div className="hero-cta reveal d3">
            <a href="#products" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Explore Products
            </a>
            <a href="#cta" className="btn btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" />
              </svg>
              Become Seller
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <div className="avatars">
              <span>CN</span><span>CB</span><span>BG</span><span>+</span>
            </div>
            <div>
              <strong>500+ verified sellers</strong>
              <small><span className="stars">★★★★★</span> trusted for industrial gas procurement</small>
            </div>
          </div>
        </div>

        <div className="hero-illu reveal d2">
          <div className="illu-stage">
            <div className="illu-ring r1" />
            <div className="illu-ring r2" />
            <div className="illu-core">
              <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" aria-label="Clean energy fuel station illustration">
                <defs>
                  <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#7BB145" /><stop offset="1" stopColor="#3E79BD" />
                  </linearGradient>
                  <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#eef4f9" /><stop offset="1" stopColor="#dbe8f3" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="280" height="340" fill="url(#gB)" />
                <rect x="34" y="54" width="212" height="20" rx="6" fill="url(#gA)" />
                <rect x="46" y="74" width="10" height="150" fill="#c3d3e0" />
                <rect x="224" y="74" width="10" height="150" fill="#c3d3e0" />
                <rect x="110" y="150" width="60" height="120" rx="10" fill="#fff" stroke="#c3d3e0" strokeWidth="2" />
                <rect x="122" y="164" width="36" height="26" rx="4" fill="#1F2937" />
                <rect x="126" y="169" width="28" height="6" rx="3" fill="#7BB145" />
                <rect x="126" y="179" width="18" height="5" rx="2.5" fill="#3E79BD" />
                <circle cx="140" cy="212" r="13" fill="url(#gA)" />
                <path d="M140 205v14M133 212h14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
                <rect x="120" y="236" width="40" height="8" rx="4" fill="#e2ebf3" />
                <rect x="30" y="182" width="26" height="88" rx="13" fill="#fff" stroke="#c3d3e0" strokeWidth="2" />
                <rect x="30" y="198" width="26" height="6" fill="#7BB145" opacity=".8" />
                <rect x="224" y="182" width="26" height="88" rx="13" fill="#fff" stroke="#c3d3e0" strokeWidth="2" />
                <rect x="224" y="198" width="26" height="6" fill="#3E79BD" opacity=".8" />
                <rect x="0" y="270" width="280" height="70" fill="#cddceb" />
                <rect x="0" y="270" width="280" height="8" fill="#b7cbdd" />
                <circle cx="140" cy="110" r="20" fill="#fff" stroke="url(#gA)" strokeWidth="3" />
                <path d="M140 99c7 8 10 12 10 17a10 10 0 1 1-20 0c0-4 2-7 5-10 0 3 2 4 3 2 1-3 1-6 2-9z" fill="url(#gA)" />
              </svg>
            </div>
            <span className="particle" style={{ left: "44%", animationDelay: "0s" }} />
            <span className="particle" style={{ left: "52%", animationDelay: "1.4s", background: "var(--blue)" }} />
            <span className="particle" style={{ left: "48%", animationDelay: "2.6s" }} />
          </div>

          {/* Floating cards */}
          <div className="float-card fc1">
            <div className="fi" style={{ background: "var(--grad)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <div><b>CBG Station</b><span>Turnkey ready</span></div>
          </div>
          <div className="float-card fc2">
            <div className="fi" style={{ background: "#3E79BD" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="3" /><path d="M9 22v-4h6v4M8 6h.01M8 10h.01" />
              </svg>
            </div>
            <div><b>CNG Dispenser</b><span>High flow</span></div>
          </div>
          <div className="float-card fc3">
            <div className="fi" style={{ background: "#7BB145" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div><b>Gas Compressor</b><span>Packaged unit</span></div>
          </div>
          <div className="float-card fc4">
            <div className="fi" style={{ background: "var(--grad)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" /><path d="M21 12c-1 0-3-1-3-3s2-3 3-3-1-2-3-2-3 2-3 2-1-2-3-2-3 2-3 2-2 0-3 2 3 3 3 3-3 1-3 3 2 3 3 3 1 2 3 2 3-2 3-2 1 2 3 2 3-2 3-2 2 0 3-2-3-3-3-3z" />
              </svg>
            </div>
            <div><b>Storage Cylinders</b><span>ISO certified</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
