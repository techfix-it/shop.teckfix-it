"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './FeaturedCard.css';

interface Badge {
  text: string;
  type: string;
}

export interface FeaturedProduct {
  id: number;
  badge: Badge | null;
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  currentPrice: string;
  originalPrice?: string;
}

interface FeaturedCardProps {
  product: FeaturedProduct;
}

export default function FeaturedCard({ product }: FeaturedCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating since it's inside a Link
    e.stopPropagation(); // Avoid bubbling up the Link's onClick
    
    // Map to CartContext product format
    const cartProduct = {
      id: product.id,
      badge: product.badge ? { text: product.badge.text, type: product.badge.type.split(' ')[0] } : null,
      image: product.image,
      category: product.category,
      title: product.title,
      rating: product.rating,
      reviews: product.reviews,
      price: product.currentPrice
    };
    
    addToCart(cartProduct);
    
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <Link href={`/shop/${product.id}`} className="home-product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      {product.badge && (
        <span className={`badge ${product.badge.type}`}>{product.badge.text}</span>
      )}
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <Star className="rating-star-icon" size={16} fill="#fbbf24" stroke="none" />
          <span className="rating-count">({product.reviews} REVIEWS)</span>
        </div>
        <div className="product-price">
          <span className="current-price">{product.currentPrice}</span>
          {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
        </div>
        <button 
          className="btn-add-cart-full"
          onClick={handleAddToCart}
        >
          {added ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  );
}
