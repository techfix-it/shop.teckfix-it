"use client";

import { ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
import './OrderSummary.css';

interface OrderSummaryProps {
  subtotal: number;
  itemCount: number;
  shipping: number;
  tax: number;
  isCartPage?: boolean;
}

export default function OrderSummary({ subtotal, itemCount, shipping, tax, isCartPage = true }: OrderSummaryProps) {
  const total = subtotal + shipping + tax;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(price);
  };

  const SummaryButton = () => {
    if (itemCount === 0) {
      return (
        <button className="os-checkout-btn" disabled>
          Proceed to Checkout
          <ArrowRight size={18} />
        </button>
      );
    }
    
    if (isCartPage) {
      return (
        <Link href="/checkout" className="os-checkout-btn" style={{ textDecoration: 'none' }}>
          Proceed to Checkout
          <ArrowRight size={18} />
        </Link>
      );
    }
    
    return (
      <button className="os-checkout-btn">
        Complete Purchase
      </button>
    );
  };

  return (
    <div className="order-summary-box">
      <h2 className="os-title">{isCartPage ? 'Cart Summary' : 'Order Summary'}</h2>
      
      <div className="os-rows">
        <div className="os-row">
          <span className="os-label">Subtotal ({itemCount} items)</span>
          <span className="os-value">{formatPrice(subtotal)}</span>
        </div>
        
        <div className="os-row">
          <span className="os-label">Shipping <span className="os-info-icon">i</span></span>
          <span className="os-value-green">{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
        </div>
        
        <div className="os-row">
          <span className="os-label">Estimated Tax</span>
          <span className="os-value">{formatPrice(tax)}</span>
        </div>
      </div>

      <div className="os-promo">
        <span className="os-promo-label">PROMO CODE</span>
        <div className="os-promo-input-group">
          <input type="text" placeholder="Enter code" className="os-promo-input" />
          <button className="os-promo-btn">Apply</button>
        </div>
      </div>

      <hr className="os-divider" />

      <div className="os-total-row">
        <span className="os-total-label">Total</span>
        <div className="os-total-amount">
          <span className="os-total-price">{formatPrice(total)}</span>
          <span className="os-total-includes">Includes {formatPrice(tax)} in taxes</span>
        </div>
      </div>

      <SummaryButton />

      {isCartPage && (
        <div className="os-secure-trust">
          <span className="os-secure-text">SECURE CHECKOUT POWERED BY</span>
          <div className="os-secure-icons">
            {/* Mock payment icons */}
            <div className="mock-pay-icon"></div>
            <div className="mock-pay-icon"></div>
            <div className="mock-pay-icon"></div>
          </div>
          <div className="os-ssl-badge">
            <Lock size={12} />
            256-bit SSL Encrypted Connection
          </div>
        </div>
      )}
    </div>
  );
}
