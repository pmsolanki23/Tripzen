import React from "react";
import { trips } from "../data/index";
import SectionHeading from "./SectionHeading";

export default function RecentTrips() {
  return (
    <section className="section">
      <SectionHeading
        kicker="Journal"
        title="Recent Trips"
        text="Fresh routes and refined ideas from our travel desk."
      />
      <div className="trip-grid">
        {trips.map(([title, image, date]) => (
          <article className="trip-card" key={title}>
            <img src={image} alt={title} />
            <time>{date}</time>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
