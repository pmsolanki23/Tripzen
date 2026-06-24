import React from "react";
import { testimonials } from "../data/index";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="section testimonial-section">
      <SectionHeading
        kicker="Guest Notes"
        title="Loved by modern travellers"
        text="A polished travel experience should feel easy before, during, and after the trip."
      />
      <div className="testimonial-grid">
        {testimonials.map(([name, quote, image]) => (
          <article className="quote-card" key={name}>
            <p>"{quote}"</p>
            <div>
              <img src={image} alt={name} />
              <strong>{name}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
