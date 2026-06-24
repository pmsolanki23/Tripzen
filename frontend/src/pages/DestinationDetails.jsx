import React, { useState } from "react";
import { Check, Clock, Hotel, Star } from "lucide-react";
import { asset, places, priceNumber } from "../data/index";
import PageHero from "../components/PageHero";
import ItineraryShowcase from "../components/ItineraryShowcase";
import Newsletter from "../components/Newsletter";
import PopularPlaces from "../components/PopularPlaces";

export default function DestinationDetails({ itemId, onPlan, notify }) {
  const place = places.find((item) => item.id === itemId) || places[0];
  const [guests, setGuests] = useState(2);
  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });

  const subtotal = priceNumber(place.price) * guests;
  const service = Math.round(subtotal * 0.12);
  const total = subtotal + service;

  const submit = (event) => {
    event.preventDefault();
    notify(`Request sent for ${place.title}. Dummy booking id TZ-${Date.now().toString().slice(-5)}.`);
    setForm({ name: "", email: "", phone: "", note: "" });
  };

  return (
    <>
      <PageHero title={place.title} image={place.image} />
      <section className="section detail-layout rich-detail">
        <article className="detail-copy">
          <p className="eyebrow">{place.category} · {place.location}</p>
          <h2>{place.mood}</h2>
          <p>{place.description}</p>
          <div className="detail-stats">
            <span><Star size={18} fill="currentColor" /> {place.rating} rating</span>
            <span><Clock size={18} /> {place.days}</span>
            <span><Hotel size={18} /> {place.hotel}</span>
          </div>
          <ul className="check-list">
            {place.highlights.map((item) => (
              <li key={item}><Check size={18} /> {item}</li>
            ))}
          </ul>
          <div className="detail-gallery">
            {[place.image, asset("booking-01.jpg.webp"), asset("adventure.jpg")].map((image) => (
              <img src={image} alt="" key={image} />
            ))}
          </div>
        </article>
        <form className="join-form" onSubmit={submit}>
          <h3>Book dummy enquiry</h3>
          <div className="price-summary">
            <span>Base per guest</span>
            <strong>{place.price}</strong>
            <span>Service design</span>
            <strong>${service}</strong>
            <span>Total estimate</span>
            <strong>${total.toLocaleString()}</strong>
          </div>
          <label>
            Guests
            <input min="1" type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
          </label>
          <input placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email address" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea placeholder="Tell us your dates and travel style" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          <button type="submit">Send Request</button>
          <button className="secondary-button" type="button" onClick={() => onPlan(place)}>
            Add to trip plan
          </button>
        </form>
      </section>
      <ItineraryShowcase />
      <Newsletter />
      <PopularPlaces limit={3} onPlan={onPlan} />
    </>
  );
}
