import React from "react";
import { itinerary } from "../data/index";

export default function ItineraryShowcase() {
  return (
    <section className="section itinerary-section">
      <div>
        <p className="eyebrow">Dynamic Planning</p>
        <h2>Every trip gets a cinematic rhythm.</h2>
        <p>Tripzen balances movement and rest so the journey feels polished, not packed.</p>
      </div>
      <div className="timeline">
        {itinerary.map(([day, title, text]) => (
          <article key={day}>
            <span>{day}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
