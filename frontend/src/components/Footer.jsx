import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { gallery, navItems } from "../data/index";

function TripzenLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="#062e2f"/>
      <rect x="9" y="11" width="26" height="4" rx="2" fill="#c99a43"/>
      <rect x="19" y="15" width="6" height="12" rx="1" fill="#c99a43"/>
      <rect x="10" y="29" width="14" height="3.5" rx="1.5" fill="#f45b4f"/>
      <path d="M24 29 L10 39.5" stroke="#f45b4f" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="10" y="37" width="14" height="3.5" rx="1.5" fill="#f45b4f"/>
      <circle cx="34" cy="34" r="3.5" fill="#008a8d"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="#/home">
            <TripzenLogo />
            <span>Tripzen</span>
          </a>
          <p>Premium travel planning for curated escapes, private routes, and memorable stays.</p>
          <div className="socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="mailto:contact@tripzen.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          {navItems.slice(1).map(([id, label]) => (
            <a href={`#/${id}`} key={id}>{label}</a>
          ))}
        </div>
        <div>
          <h3>Popular Destination</h3>
          {["Indonesia", "Australia", "Italy", "Switzerland", "Maldives"].map((item) => (
            <a href="#/destinations" key={item}>{item}</a>
          ))}
        </div>
        <div>
          <h3>Gallery</h3>
          <div className="footer-gallery">
            {gallery.map((image) => (
              <img src={image} alt="" key={image} />
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">Copyright 2026 Tripzen. Crafted as a React experience.</p>
    </footer>
  );
}
