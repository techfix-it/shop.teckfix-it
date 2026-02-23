"use client";

import Link from 'next/link';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="home-container hero-content">
        <div className="hero-text">
          <span className="hero-badge">NEW ARRIVAL</span>
          <h1 className="hero-title">Elite Performance Gaming PCs</h1>
          <p className="hero-subtitle">
            Experience unrivaled speed and visuals with our latest custom-built workstations and gaming rigs, powered by RTX 40-Series GPUs.
          </p>
          <div className="hero-actions">
            <Link href="/shop" className="btn-primary">Shop Now</Link>
            <Link href="/shop" className="btn-outline">Build Your Own</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800&h=800" alt="Gaming PC" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
