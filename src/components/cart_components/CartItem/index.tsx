"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import './CartItem.css';

export interface CartItemType {
  id: string;
  title: string;
  sku: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity?: (id: string, newQuantity: number) => void;
  onRemove?: (id: string) => void;
  readonly?: boolean;
}

export default function CartItem({ item, onUpdateQuantity, onRemove, readonly = false }: CartItemProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(price);
  };

  return (
    <div className="cart-item">
      <div className="ci-image-container">
        <img src={item.image} alt={item.title} className="ci-image" />
      </div>

      <div className="ci-details">
        <div className="ci-header">
          <div className="ci-title-group">
            <h3 className="ci-title">{item.title}</h3>
            <span className="ci-sku">SKU: {item.sku}</span>
          </div>
          <div className="ci-price">{formatPrice(item.price)}</div>
        </div>

        <div className="ci-status">
          {item.inStock ? (
            <span className="stock-green">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              IN STOCK
            </span>
          ) : (
            <span className="stock-red">OUT OF STOCK</span>
          )}
        </div>

        {!readonly && (
          <div className="ci-actions">
            <div className="ci-quantity-selector">
              <button 
                className="ci-qty-btn" 
                onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                <Minus size={14} />
              </button>
              <span className="ci-qty-value">{item.quantity}</span>
              <button 
                className="ci-qty-btn"
                onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus size={14} />
              </button>
            </div>

            <button 
              className="ci-remove-btn"
              onClick={() => onRemove && onRemove(item.id)}
            >
              <Trash2 size={16} />
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
