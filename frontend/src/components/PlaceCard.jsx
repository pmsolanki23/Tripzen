import React from "react";
import { CalendarDays, Heart, MapPin, Star } from "lucide-react";

export default function PlaceCard({ favorite, onFavorite, onPlan, place }) {
  return (
    <article className="place-card">
      <div className="image-wrap">
        <img src={place.image} alt={place.title} />
        <span>{place.price}</span>
        <button
          className={favorite ? "floating-action active" : "floating-action"}
          type="button"
          onClick={() => onFavorite?.(place)}
          aria-label={`Save ${place.title}`}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="place-body">
        <small>{place.category}</small>
        <h3>{place.title}</h3>
        <p>
          <MapPin size={15} /> {place.location}
        </p>
        <p className="place-description">{place.description}</p>
        <div className="place-meta">
          <span>
            <Star size={15} fill="currentColor" /> {place.rating}
          </span>
          <span>
            <CalendarDays size={15} /> {place.days}
          </span>
        </div>
        <div className="card-actions">
          <a href={`#/details/${place.id}`}>Details</a>
          <button type="button" onClick={() => onPlan?.(place)}>Add Plan</button>
        </div>
      </div>
    </article>
  );
}
