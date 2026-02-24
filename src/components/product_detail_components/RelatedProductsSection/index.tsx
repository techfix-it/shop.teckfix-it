'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RelatedProductCard from '../RelatedProductCard';
import './RelatedProductsSection.css';
import { Product } from '@/components/shop_components/CardProduct';

interface RelatedProductsSectionProps {
  currentProduct: Product;
  allProducts: Product[];
}

export default function RelatedProductsSection({ currentProduct, allProducts }: RelatedProductsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Show ALL products from the exact same category, excluding the current one
  const relatedProducts = allProducts.filter(
    p => p.category_slug === currentProduct.category_slug && p.id !== currentProduct.id
  );

  return (
    <div className="rps-wrapper">
      <div className="rps-header">
        <h2 className="rps-title">Related Products</h2>
        <div className="rps-nav">
          <button className="rps-btn" aria-label="Previous" onClick={scrollLeft}>
            <ChevronLeft size={20} />
          </button>
          <button className="rps-btn" aria-label="Next" onClick={scrollRight}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="rps-slider-container" ref={scrollContainerRef}>
        <div className="rps-slider-track">
          {relatedProducts.map(product => (
            <div key={product.id} className="rps-slide-item">
               <RelatedProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
