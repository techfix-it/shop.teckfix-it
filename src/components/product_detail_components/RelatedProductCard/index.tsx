"use client";

import Link from 'next/link';
import { Star, StarHalf, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import './RelatedProductCard.css';
import { Product } from '@/components/shop_components/CardProduct';

interface RelatedProductCardProps {
  product: Product;
}

export default function RelatedProductCard({ product }: RelatedProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product page since the button is outside a link but just in case
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="related-product-card">
      <Link href={`/shop/${product.id}`} className="rpc-image-container">
        {product.badge && (
          <span className={`rpc-badge badge-${product.badge.type.toLowerCase()}`}>
            {product.badge.text}
          </span>
        )}
        <img src={product.image} alt={product.title} className="rpc-image" />
      </Link>
      
      <div className="rpc-info">
        <span className="rpc-category">{product.category_slug}</span>
        
        <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 className="rpc-title" title={product.title}>
            {product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title}
          </h3>
        </Link>
        
        <div className="rpc-rating">
          <div className="rpc-stars">
            {[1, 2, 3, 4, 5].map((star) => {
              if (star <= Math.floor(product.rating)) {
                return <Star key={star} size={14} fill="#f59e0b" color="#f59e0b" />;
              } else if (star === Math.ceil(product.rating) && !Number.isInteger(product.rating)) {
                return (
                  <div key={star} style={{ position: 'relative', width: 14, height: 14 }}>
                    <Star size={14} color="#d1d5db" style={{ position: 'absolute' }} />
                    <div style={{ position: 'absolute', width: '50%', overflow: 'hidden', height: '100%' }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    </div>
                  </div>
                );
              } else {
                return <Star key={star} size={14} color="#d1d5db" />;
              }
            })}
          </div>
          <span className="rpc-rating-count">({product.reviews})</span>
        </div>
        
        <hr className="rpc-divider" />
        
        <div className="rpc-footer">
          <span className="rpc-price">{product.currentPrice}</span>
          <button 
            className={`rpc-btn-add ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
            style={added ? { backgroundColor: '#10b981', color: 'white' } : {}}
            aria-label="Add to cart"
          >
            {added ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
