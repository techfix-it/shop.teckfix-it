"use client";

import Link from 'next/link';
import './BannersSection.css';

export default function BannersSection() {
  return (
    <section className="banners-section">
      <div className="home-container banners-grid">
        <div className="banner-card corporate">
          <div className="banner-content">
            <h2>Corporate Solutions</h2>
            <p>Scalable server architecture and network deployment for business.</p>
            <Link href="#" className="btn-outline-white">Learn More</Link>
          </div>
        </div>
        <div className="banner-card workflow">
          <div className="banner-content">
            <h2>Refined Workflow</h2>
            <p>The best ergonomic keyboards and 4K displays for productivity.</p>
            <Link href="/shop" className="btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
