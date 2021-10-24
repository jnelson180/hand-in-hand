import React from 'react';
import './DonorHero.scss';
import LandingBackground from "../../assets/LandingBackground.jpg";

const DonorHero = () => (
  <section className="donor-hero-background" style={{
    background: `url(${LandingBackground})`,
    height: 1039,
  }}>
    <h1 className="donor-hero-cta heading-light">
      Hand-in-Hand <sup className="supertext">TM</sup><br />
      Partner with us to solve <br />
      problems around the world.
    </h1>
  </section>
);

export default DonorHero;
