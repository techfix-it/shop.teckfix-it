'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
  sku: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localeStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('techfix_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from local storage');
      }
    }
  }, []);

  // Save to localeStorage whenever cart changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('techfix_cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product: any, quantity: number = 1) => {
    setCart(prevCart => {
      // Clean ID to string for consistency
      const productId = String(product.id);
      
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem) {
        // Increment quantity
        return prevCart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Parse price to number if it's a string like "€1,599.00"
        let priceNum = 0;
        if (typeof product.price === 'string') {
          priceNum = parseFloat(product.price.replace('€', '').replace(/,/g, ''));
        } else if (typeof product.price === 'number') {
           priceNum = product.price;
        }

        // Add new item
        return [...prevCart, {
          id: productId,
          title: product.title,
          price: priceNum,
          image: product.image || '/images/placeholder.jpg', // Fallback
          quantity: quantity,
          inStock: product.inStock !== undefined ? product.inStock : true,
          sku: product.sku || `SKU-${productId}`
        }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return; // Prevent 0 or negative quantities directly
    
    setCart(prevCart => prevCart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
