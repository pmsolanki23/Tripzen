import React, { useMemo, useState } from "react";
import { CalendarDays, Globe2, MapPin, Search, Sparkles } from "lucide-react";
import { places } from "../data/index";

export default function TravelSearch({ onPlan }) {
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [date, setDate] = useState("");

  const recommendation = useMemo(() => {
    const place = places.find((item) =>
      item.title.toLowerCase().includes(destination.toLowerCase())
    );
    if (destination && place) return `${place.title} matched · ${place.days} · from ${place.price}`;
    if (travelType) return `${travelType} concierge route · 4 curated options ready`;
    return "Tell us the mood and Tripzen will shape the route.";
  }, [destination, travelType]);

  const matches = places.filter((place) => {
    const text = `${place.title} ${place.location} ${place.category}`.toLowerCase();
    return destination ? text.includes(destination.toLowerCase()) : false;
  });

  return (
    <section className="search-band">
      <div>
        <p className="eyebrow">Concierge Search</p>
        <h2>Where do you want to go?</h2>
        <span className="planner-note">
          <Sparkles size={16} />
          {recommendation}
        </span>
      </div>
      <form className="trip-search">
        <label>
          <MapPin size={18} />
          <input
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          <CalendarDays size={18} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          <Globe2 size={18} />
          <select value={travelType} onChange={(e) => setTravelType(e.target.value)}>
            <option value="" disabled>Travel type</option>
            <option>Adventure</option>
            <option>Cultural Tourism</option>
            <option>Roadtrip</option>
            <option>Luxury Retreat</option>
          </select>
        </label>
        <button type="button">
          <Search size={18} />
          Search
        </button>
      </form>
      {(matches.length > 0 || destination) && (
        <div className="search-results">
          {matches.length > 0 ? (
            matches.slice(0, 3).map((place) => (
              <article key={place.id}>
                <img src={place.image} alt={place.title} />
                <div>
                  <strong>{place.title}</strong>
                  <span>{place.location} · {place.days}</span>
                </div>
                <button type="button" onClick={() => onPlan?.(place)}>Add</button>
              </article>
            ))
          ) : (
            <p>No exact match yet. Try Ladakh, Miami, Sun Temple, or Bridge.</p>
          )}
        </div>
      )}
    </section>
  );
}
