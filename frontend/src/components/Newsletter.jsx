import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setDone(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div>
        <p className="eyebrow">Stay Inspired</p>
        <h2>Subscribe our Newsletter</h2>
        <p>Premium routes, seasonal ideas, and hotel notes from the Tripzen desk.</p>
      </div>
      <form onSubmit={submit}>
        <input
          placeholder="Enter your email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {done && <p className="inline-success">Subscribed with dummy frontend storage.</p>}
    </section>
  );
}
