import React, { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { asset, places } from "../data/index";
import PageHero from "../components/PageHero";
import TravelSearch from "../components/TravelSearch";
import PlaceMini from "../components/PlaceMini";
import Newsletter from "../components/Newsletter";
import RecentTrips from "../components/RecentTrips";
import SectionHeading from "../components/SectionHeading";

export default function Destinations({ favorites, onFavorite, onPlan }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...new Set(places.map((p) => p.category))];

  const visible = useMemo(() => {
    const filtered = places.filter((place) => {
      const matchesCategory = category === "All" || place.category === category;
      const text = `${place.title} ${place.location} ${place.category}`.toLowerCase();
      return matchesCategory && text.includes(query.toLowerCase());
    });
    if (sort === "price") return [...filtered].sort((a, b) => Number(a.price.replace("$", "")) - Number(b.price.replace("$", "")));
    if (sort === "rating") return [...filtered].sort((a, b) => Number(b.rating) - Number(a.rating));
    return filtered;
  }, [category, query, sort]);

  const resetFilters = () => { setCategory("All"); setQuery(""); setSort("featured"); };

  return (
    <>
      <TravelSearch onPlan={onPlan} />
      <section className="section destination-layout">
        <aside className="filter-panel">
          <h2><SlidersHorizontal size={20} />Filter Result</h2>
          <label>
            Search
            <input placeholder="Search place or country" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
          <label>
            Country
            <select>
              <option>Any country</option>
              <option>India</option>
              <option>USA</option>
              <option>Indonesia</option>
            </select>
          </label>
          <label>
            Travel Type
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Price Range
            <input type="range" min="300" max="1000" defaultValue="720" />
          </label>
          <label>
            Sort By
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price">Lowest price</option>
              <option value="rating">Highest rated</option>
            </select>
          </label>
          <button type="button" onClick={resetFilters}>Reset Filters</button>
        </aside>
        <div className="results">
          <SectionHeading
            kicker="Browse"
            title={`${visible.length} Curated Places`}
            text="Filter by style, then let Tripzen shape the route around your dates."
          />
          <div className="places-grid compact">
            {visible.map((place) => (
              <PlaceMini
                favorite={favorites.includes(place.id)}
                key={place.id}
                onFavorite={onFavorite}
                onPlan={onPlan}
                place={place}
              />
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <RecentTrips />
    </>
  );
}
