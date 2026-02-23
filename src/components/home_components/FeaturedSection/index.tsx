"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturedSection.css';
import FeaturedCard, { FeaturedProduct } from '../FeaturedCard';
import mockProducts from '@/app/api/test/mock/mock_products.json';

// Get the top 10 products with highest rating
const FEATURED_PRODUCTS = [...mockProducts]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 10) as unknown as FeaturedProduct[];

export default function FeaturedSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300; // approximate width of a card + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="featured-section">
      <div className="home-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Hardware</h2>
            <p className="section-subtitle">Top-rated tech handpicked by our experts.</p>
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={() => scroll('left')}><ChevronLeft size={20} /></button>
            <button className="slider-btn" onClick={() => scroll('right')}><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="home-products-grid" ref={sliderRef}>
          {FEATURED_PRODUCTS.map((product) => (
            <FeaturedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
