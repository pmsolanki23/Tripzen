import React, { useState } from "react";
import { BriefcaseBusiness, Trash2, X } from "lucide-react";
import { priceNumber } from "../data/index";

export default function PlannerDock({ planner, setPlanner }) {
  const [open, setOpen] = useState(false);
  const estimate = planner.reduce((sum, item) => sum + priceNumber(item.price), 0);

  return (
    <aside className={open ? "planner-dock open" : "planner-dock"}>
      <button className="planner-toggle" type="button" onClick={() => setOpen((v) => !v)}>
        <BriefcaseBusiness size={18} />
        Trip Plan
        <strong>{planner.length}</strong>
      </button>
      {open && (
        <div className="planner-panel">
          <div className="planner-head">
            <h3>Your dummy itinerary</h3>
            <button type="button" onClick={() => setPlanner([])} aria-label="Clear plan">
              <Trash2 size={17} />
            </button>
          </div>
          {planner.length === 0 ? (
            <p>Add destinations to build a frontend-only trip plan.</p>
          ) : (
            <>
              {planner.map((item) => (
                <article key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.days} · {item.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlanner((items) => items.filter((p) => p.id !== item.id))}
                    aria-label={`Remove ${item.title}`}
                  >
                    <X size={15} />
                  </button>
                </article>
              ))}
              <div className="planner-total">
                <span>Estimated base</span>
                <strong>${estimate.toLocaleString()}</strong>
              </div>
              <a href="#/contact">Send to concierge</a>
            </>
          )}
        </div>
      )}
    </aside>
  );
}
