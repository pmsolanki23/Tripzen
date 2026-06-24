import React from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { navItems } from "../data/index";

function TripzenLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background */}
      <rect width="44" height="44" rx="12" fill="#062e2f"/>
      {/* Gold top bar of T */}
      <rect x="9" y="11" width="26" height="4" rx="2" fill="#c99a43"/>
      {/* T stem */}
      <rect x="19" y="15" width="6" height="12" rx="1" fill="#c99a43"/>
      {/* Z top bar */}
      <rect x="10" y="29" width="14" height="3.5" rx="1.5" fill="#f45b4f"/>
      {/* Z diagonal */}
      <path d="M24 29 L10 39.5" stroke="#f45b4f" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Z bottom bar */}
      <rect x="10" y="37" width="14" height="3.5" rx="1.5" fill="#f45b4f"/>
      {/* Teal dot accent */}
      <circle cx="34" cy="34" r="3.5" fill="#008a8d"/>
    </svg>
  );
}

export default function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="Tripzen home">
        <TripzenLogo />
        <span>Tripzen</span>
      </a>
      <button
        className="icon-button menu-button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            className={active === id ? "active" : ""}
            href={`#/${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="phone" href="tel:+10256928256">
          <Phone size={16} />
          10(256)-928 256
        </a>
        <a className="primary-link" href="#/contact">
          Plan Trip
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
