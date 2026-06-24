import React, { useEffect, useState } from "react";
import { heroSlides, destinationTiles, packages, asset } from "../data/index";
import { BriefcaseBusiness, Check, Plane } from "lucide-react";
import TravelSearch from "../components/TravelSearch";
import PopularPlaces from "../components/PopularPlaces";
import ItineraryShowcase from "../components/ItineraryShowcase";
import ServiceBand from "../components/ServiceBand";
import Testimonials from "../components/Testimonials";
import RecentTrips from "../components/RecentTrips";
import SectionHeading from "../components/SectionHeading";

export default function Home({ favorites, onFavorite, onPlan, notify }) {
  const [slide, setSlide] = useState(0);
  const [activePackage, setActivePackage] = useState(0);
  const current = heroSlides[slide];
  const selected = packages[activePackage];

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((v) => (v + 1) % heroSlides.length),
      5000
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero" style={{ "--hero-image": `url("${current.image}")` }}>
        <div className="hero-content">
          <p className="eyebrow">Private journeys, beautifully handled</p>
          <h1>{current.city}</h1>
          <p>{current.copy}</p>
          <div className="hero-actions">
            <a className="button primary" href="#/destinations">Explore Destinations</a>
            <a className="button ghost" href="#/details">View Signature Trip</a>
          </div>
        </div>
        <div className="hero-panel">
          <span>Featured Route</span>
          <strong>{current.city} Curated Escape</strong>
          <small>7 days · 5-star stays · private local host</small>
        </div>
        <div className="slide-dots" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button
              key={item.city}
              className={slide === index ? "active" : ""}
              onClick={() => setSlide(index)}
              aria-label={item.city}
            />
          ))}
        </div>
      </section>

      <TravelSearch onPlan={onPlan} />

      {/* Luxury Packages */}
      <section className="section package-section">
        <div className="package-copy">
          <p className="eyebrow">Ultra Premium</p>
          <h2>Luxury packages that feel personally composed.</h2>
          <p>Choose a mood and the experience updates instantly with inclusions, price positioning, and a visual preview.</p>
          <div className="package-tabs">
            {packages.map((item, index) => (
              <button
                className={activePackage === index ? "active" : ""}
                key={item.name}
                onClick={() => setActivePackage(index)}
                type="button"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <article className="package-preview">
          <img src={selected.image} alt={selected.name} />
          <div>
            <span>{selected.tag}</span>
            <h3>{selected.name}</h3>
            <strong>{selected.price}</strong>
            <ul>
              {selected.inclusions.map((item) => (
                <li key={item}><Check size={16} />{item}</li>
              ))}
            </ul>
            <button
              className="button primary"
              type="button"
              onClick={() => notify(`${selected.name} enquiry created. Our dummy concierge saved it locally.`)}
            >
              <BriefcaseBusiness size={18} />
              Request Package
            </button>
          </div>
        </article>
      </section>

      {/* Popular Destinations */}
      <section className="section">
        <SectionHeading
          kicker="Top Regions"
          title="Popular Destination"
          text="Immersive escapes shaped by comfort, culture, and the small details that make a trip feel rare."
        />
        <div className="destination-grid">
          {destinationTiles.map(([name, meta, image]) => (
            <a className="destination-tile" href="#/destinations" key={name}>
              <img src={image} alt={name} />
              <span>{name}</span>
              <small>{meta}</small>
            </a>
          ))}
        </div>
      </section>

      <PopularPlaces favorites={favorites} limit={6} onFavorite={onFavorite} onPlan={onPlan} />
      <ItineraryShowcase />
      <ServiceBand />
      <Testimonials />
      <RecentTrips />
    </>
  );
}
