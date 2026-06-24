import React, { useState } from "react";
import { navItems } from "./data/index";
import { useRoute } from "./hooks/useRoute";
import { usePersistedState } from "./hooks/usePersistedState";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PlannerDock from "./components/PlannerDock";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  const route = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [favorites, setFavorites] = usePersistedState("tripzen:favorites", []);
  const [planner, setPlanner] = usePersistedState("tripzen:planner", []);
  const [page, itemId] = route.split("/");
  const active = navItems.some(([id]) => id === page) ? page : "home";

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.tripzenToast);
    window.tripzenToast = window.setTimeout(() => setToast(""), 2800);
  };

  const toggleFavorite = (place) => {
    setFavorites((items) =>
      items.includes(place.id)
        ? items.filter((id) => id !== place.id)
        : [...items, place.id]
    );
    notify(`${place.title} ${favorites.includes(place.id) ? "removed" : "saved"} in favorites.`);
  };

  const addToPlanner = (place) => {
    setPlanner((items) =>
      items.some((item) => item.id === place.id) ? items : [...items, place]
    );
    notify(`${place.title} added to your trip plan.`);
  };

  return (
    <>
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {active === "home" && (
          <Home favorites={favorites} onFavorite={toggleFavorite} onPlan={addToPlanner} notify={notify} />
        )}
        {active === "about" && <About />}
        {active === "destinations" && (
          <Destinations favorites={favorites} onFavorite={toggleFavorite} onPlan={addToPlanner} />
        )}
        {active === "details" && (
          <DestinationDetails itemId={itemId} onPlan={addToPlanner} notify={notify} />
        )}
        {active === "blog" && <Blog itemId={itemId} notify={notify} />}
        {active === "contact" && <Contact notify={notify} />}
      </main>
      <PlannerDock planner={planner} setPlanner={setPlanner} />
      <Toast message={toast} />
      <Footer />
    </>
  );
}
