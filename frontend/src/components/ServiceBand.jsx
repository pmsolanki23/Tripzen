import React from "react";
import { Compass, Hotel, Train } from "lucide-react";

const services = [
  ["Comfortable Journey", "Private transfers, smart pacing, and routes designed around real rest.", Train],
  ["Luxury Hotels", "Handpicked stays with location, service, and atmosphere checked before booking.", Hotel],
  ["Expert Guides", "Local specialists who turn a place from beautiful into deeply memorable.", Compass],
];

export default function ServiceBand() {
  return (
    <section className="section services">
      {services.map(([title, text, Icon]) => (
        <article key={title}>
          <Icon size={38} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}
