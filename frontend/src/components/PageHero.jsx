import React from "react";

export default function PageHero({ title, image }) {
  return (
    <section
      className="page-hero"
      style={{ "--page-image": `url("${image}")` }}
    >
      <div>
        <p className="eyebrow">Tripzen</p>
        <h1>{title}</h1>
        <p>Pixel-perfect travel planning with polished details and memorable places.</p>
      </div>
    </section>
  );
}
