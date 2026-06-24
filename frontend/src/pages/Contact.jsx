import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { asset } from "../data/index";
import PageHero from "../components/PageHero";

export default function Contact({ notify }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (event) => {
    event.preventDefault();
    notify(`Thanks ${form.name || "traveller"}, your message is saved as a dummy lead.`);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero title="Contact" image={asset("bradcam4.png")} />
      <section className="section contact-layout">
        <div className="map-panel">
          <MapPin size={46} />
          <h2>Tripzen Travel Studio</h2>
          <p>Ahmedabad, Gujarat · Remote planning worldwide</p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <p className="eyebrow">Get in Touch</p>
          <h2>Tell us what kind of trip you want.</h2>
          <input
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            placeholder="Message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">
            <Send size={18} /> Send Message
          </button>
        </form>
        <div className="contact-cards">
          <article><MapPin /> Buttonwood, California</article>
          <article><Phone /> +10 256 928 256</article>
          <article><Mail /> contact@tripzen.com</article>
        </div>
      </section>
    </>
  );
}
