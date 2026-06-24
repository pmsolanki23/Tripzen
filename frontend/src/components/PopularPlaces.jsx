import React from "react";
import { places } from "../data/index";
import PlaceCard from "./PlaceCard";
import SectionHeading from "./SectionHeading";

export default function PopularPlaces({ favorites = [], limit = places.length, onFavorite, onPlan }) {
  return (
    <section className="section soft">
      <SectionHeading
        kicker="Handpicked"
        title="Popular Places"
        text="Premium stays, clean logistics, and excellent local experiences in one polished plan."
      />
      <div className="places-grid">
        {places.slice(0, limit).map((place) => (
          <PlaceCard
            favorite={favorites.includes(place.id)}
            key={place.id}
            onFavorite={onFavorite}
            onPlan={onPlan}
            place={place}
          />
        ))}
      </div>
    </section>
  );
}
