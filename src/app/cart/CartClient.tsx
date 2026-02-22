"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CartItem from '@/components/cart_components/CartItem';
import OrderSummary from '@/components/cart_components/OrderSummary';
import FrequentlyBoughtTogether from '@/components/cart_components/FrequentlyBoughtTogether';
import { Product } from '@/components/shop_components/CardProduct';
import { useCart } from '@/context/CartContext';

interface CartClientProps {
  initialItems?: any[]; // Kept for interface compatibility
  recommendedItems: Product[];
}

export default function CartClient({ recommendedItems }: CartClientProps) {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  const shippingCounter = cartTotal > 500 || cartTotal === 0 ? 0 : 15; // Free shipping over €500
  const tax = cartTotal * 0.23; // 23% VAT mock

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <p className="cart-subtitle">Review your high-performance gear before checkout.</p>
      </div>

      <div className="cart-content">
        <div className="cart-items-section">
          {cart.length === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is currently empty.</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}

          <Link href="/shop" className="continue-shopping">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        <div className="cart-summary-section">
          <OrderSummary 
            subtotal={cartTotal} 
            itemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            shipping={shippingCounter}
            tax={tax}
            isCartPage={true}
          />
        </div>
      </div>

      <FrequentlyBoughtTogether recommendedItems={recommendedItems} />
    </div>
  );
}
