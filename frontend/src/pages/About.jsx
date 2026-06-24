import React from "react";
import { Plane } from "lucide-react";
import { asset } from "../data/index";
import PageHero from "../components/PageHero";
import ServiceBand from "../components/ServiceBand";
import Testimonials from "../components/Testimonials";
import RecentTrips from "../components/RecentTrips";

export default function About() {
  return (
    <>
      <PageHero title="About us" image={asset("bradcam3.png")} />
      <section className="section about-grid">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2>Travel design for people who value time, taste, and calm.</h2>
          <p>
            Tripzen started with one belief: a great journey should feel effortless without becoming
            generic. We combine destination knowledge, premium stays, trusted local hosts, and a
            careful sense of pacing.
          </p>
          <div className="stats">
            <span><strong>378</strong> Tours completed</span>
            <span><strong>30</strong> Countries curated</span>
            <span><strong>2263</strong> Happy travellers</span>
          </div>
        </div>
        <div className="image-stack">
          <img src={asset("1.png.webp")} alt="Travellers exploring a scenic location" />
          <img src={asset("2.png.webp")} alt="Premium journey moment" />
        </div>
      </section>
      <section className="video-strip" style={{ "--video-image": `url("${asset("video.png")}")` }}>
        <div>
          <span><Plane size={28} /></span>
          <h2>Enjoy Video</h2>
        </div>
      </section>
      <ServiceBand />
      <Testimonials />
      <RecentTrips />
    </>
  );
}
