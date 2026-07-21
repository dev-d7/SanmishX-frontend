"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, LOGO_BASE64 } from "@/lib/data";
import { resolveHref } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  };

  const openDrawer = () => {
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="wrap nav">
          <a href={resolveHref("#home", pathname)} className="brand" aria-label="SANMISH home">
            <Image src={LOGO_BASE64} alt="SANMISH — Clean Energy Smarter Solutions logo" width={132} height={44} style={{ height: 44, width: "auto" }} priority unoptimized />
          </a>
          <nav className="nav-menu" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname;
              return (
                <a
                  key={link.label}
                  href={resolveHref(link.href, pathname)}
                  className={isActive ? "active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => {
                const el = document.getElementById("mainsearch");
                if (el) el.focus();
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <a href="#" className="link-btn desk-only">Login</a>
            <a href={resolveHref("#cta", pathname)} className="btn btn-ghost desk-only">Request Quote</a>
            <a href={resolveHref("#cta", pathname)} className="btn btn-primary">Become Seller</a>
            <button className="burger" id="burger" aria-label="Open menu" onClick={openDrawer}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`drawer${drawerOpen ? " open" : ""}`} id="drawer">
        <div className="drawer-bg" onClick={closeDrawer} />
        <div className="drawer-panel">
          <div className="drawer-top">
            <Image src={LOGO_BASE64} alt="SANMISH" width={110} height={38} style={{ height: 38 }} unoptimized />
            <button className="icon-btn" onClick={closeDrawer} aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <a key={link.label} className={`mlink${link.href === pathname ? " active" : ""}`} href={resolveHref(link.href, pathname)} onClick={closeDrawer}>{link.label}</a>
          ))}
          <div className="drawer-cta">
            <a href="#" className="btn btn-ghost" onClick={closeDrawer}>Login</a>
            <a href={resolveHref("#cta", pathname)} className="btn btn-primary" onClick={closeDrawer}>Become Seller</a>
          </div>
        </div>
      </div>
    </>
  );
}
