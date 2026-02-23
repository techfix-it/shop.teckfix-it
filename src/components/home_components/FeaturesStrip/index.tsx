"use client";

import { Package, LifeBuoy, ShieldCheck, Wallet } from 'lucide-react';
import './FeaturesStrip.css';

export default function FeaturesStrip() {
  return (
    <section className="features-strip">
      <div className="home-container features-grid">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Package size={24} />
          </div>
          <div className="feature-text">
            <h4>Free Shipping</h4>
            <p>On orders over €500</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <LifeBuoy size={24} />
          </div>
          <div className="feature-text">
            <h4>Expert Support</h4>
            <p>Direct tech assistance</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <ShieldCheck size={24} />
          </div>
          <div className="feature-text">
            <h4>2 Year Warranty</h4>
            <p>On all electronics</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Wallet size={24} />
          </div>
          <div className="feature-text">
            <h4>Secure Payment</h4>
            <p>100% encrypted checkout</p>
          </div>
        </div>
      </div>
    </section>
  );
}
