"use client";
import { useState } from "react";
import { CITIES, CITY_PRODUCTS } from "@/lib/data";

export default function CitiesSection() {
  const [activeCity, setActiveCity] = useState(0);

  function handleCityClick(i: number) {
    setActiveCity(i);
    // Scroll rail back to start on city change
    const rail = document.getElementById("cityRailNext");
    if (rail) rail.scrollTo({ left: 0, behavior: "smooth" });
  }

  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="cities reveal">
          <div className="cities-top">
            <h3>
              <span className="clk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                </svg>
              </span>
              Cities with 24-Hour Delivery
            </h3>
            <button className="city-update">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Update Location
            </button>
          </div>

          <div className="city-tabs">
            {CITIES.map((city, i) => (
              <button
                key={i}
                className={`city-tab${i === activeCity ? " on" : ""}`}
                onClick={() => handleCityClick(i)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="city-rail" id="cityRailNext">
            {CITY_PRODUCTS.map((item, i) => (
              <div className="city-card" key={i}>
                <div className="city-thumb" dangerouslySetInnerHTML={{ __html: item.ic }} />
                <h4>{item.t}</h4>
                <div className="from">Starting From {item.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
