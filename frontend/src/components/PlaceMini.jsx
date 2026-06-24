import React from "react";
import { Heart, MapPin } from "lucide-react";

export default function PlaceMini({ favorite, onFavorite, onPlan, place }) {
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
        <p className="place-description">{place.mood}</p>
        <div className="card-actions">
          <a href={`#/details/${place.id}`}>View details</a>
          <button type="button" onClick={() => onPlan?.(place)}>Add Plan</button>
        </div>
      </div>
    </article>
  );
}
