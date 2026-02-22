"use client";

import { Star, StarHalf, Plus, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import './CardProduct.css';

interface Badge {
  text: string;
  type: string;
}

export interface Product {
  id: number;
  badge: Badge | null;
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
}

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if wrapped in a link
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`badge badge-${product.badge.type.toLowerCase()}`}>{product.badge.text}</span>
      )}
      <Link href={`/shop/${product.id}`} className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        <div className="product-rating">
          {[1, 2, 3, 4, 5].map((star) => {
            if (star <= Math.floor(product.rating)) {
              return <Star key={star} size={15} fill="#f59e0b" color="#f59e0b" />;
            } else if (star === Math.ceil(product.rating) && !Number.isInteger(product.rating)) {
              return (
                <div key={star} style={{ position: 'relative', width: 15, height: 15 }}>
                  <Star size={15} color="#d1d5db" style={{ position: 'absolute' }} />
                  <div style={{ position: 'absolute', width: '50%', overflow: 'hidden', height: '100%' }}>
                    <Star size={15} fill="#f59e0b" color="#f59e0b" />
                  </div>
                </div>
              );
            } else {
              return <Star key={star} size={15} color="#d1d5db" />;
            }
          })}
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-footer-clean">
          <span className="current-price">{product.price}</span>
          <button 
            className={`btn-add-cart-icon ${added ? 'added' : ''}`} 
            aria-label="Add to cart"
            onClick={handleAddToCart}
          >
            {added ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
