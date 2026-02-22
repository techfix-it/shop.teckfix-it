"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/cart_components/OrderSummary';
import { CheckCircle2, ShieldCheck, CreditCard, Landmark, Wallet } from 'lucide-react';

export default function CheckoutClient() {
  const { cart, cartTotal } = useCart();
  const [activeStep, setActiveStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | 'paypal'>('card');
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    newsletter: false,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const shippingCost = shippingMethod === 'standard' ? (cartTotal > 500 ? 0 : 4.99) : 12.99;
  const tax = cartTotal * 0.08; // 8% mock tax for checkout image reference
  const grandTotal = cartTotal + shippingCost + tax;

  const handleNextStep = (e: React.FormEvent, nextStep: number) => {
    e.preventDefault();
    setActiveStep(nextStep);
  };

  return (
    <div className="checkout-container">

      {/* Progress Stepper (Mobile) */}
      <div className="checkout-progress-stepper">
        <div className={`step-indicator completed`}>
          <div className="indicator-circle"><Check size={16} /></div>
          <span>CART</span>
        </div>
        <div className="step-line active"></div>
        <div className={`step-indicator ${activeStep >= 1 ? 'active' : ''}`}>
          <div className="indicator-circle">{activeStep > 4 ? <Check size={16} /> : '2'}</div>
          <span>CHECKOUT</span>
        </div>
        <div className="step-line"></div>
        <div className={`step-indicator ${activeStep === 4 ? 'active' : ''}`}>
          <div className="indicator-circle">3</div>
          <span>PAYMENT</span>
        </div>
      </div>

      {/* Mobile Collapsible Summary Banner */}
      <div className="mobile-summary-banner" onClick={() => setIsSummaryOpen(!isSummaryOpen)}>
        <div className="banner-left">
          <div className="cart-icon-wrapper">
             <ShoppingCart size={20} />
          </div>
          <div className="banner-info">
             <span className="banner-title">Order Summary</span>
             <span className="banner-subtitle">{cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart</span>
          </div>
        </div>
        <div className="banner-right">
          <span className="banner-total">€{grandTotal.toFixed(2)}</span>
          <ChevronDown size={20} className={isSummaryOpen ? 'rotated' : ''} />
        </div>
      </div>

      {/* Expanded Mobile Summary */}
      {isSummaryOpen && (
        <div className="mobile-summary-expanded">
           <div className="checkout-items-preview">
            {cart.map(item => (
              <div key={item.id} className="summary-mini-item">
                <div className="smi-image-container">
                  <img src={item.image} alt={item.title} className="smi-image" />
                  <span className="smi-badge">{item.quantity}</span>
                </div>
                <div className="smi-info">
                  <span className="smi-title">{item.title}</span>
                  <span className="smi-desc">SKU: {item.sku}</span>
                </div>
                <span className="smi-price">€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mobile-summary-pricing">
             <div className="pricing-row">
               <span>Subtotal</span>
               <span>€{cartTotal.toFixed(2)}</span>
             </div>
             <div className="pricing-row">
               <span>Shipping</span>
               <span>{shippingCost === 0 ? 'Free' : `€${shippingCost.toFixed(2)}`}</span>
             </div>
             <div className="pricing-row total">
               <span>Total</span>
               <span>€{grandTotal.toFixed(2)}</span>
             </div>
          </div>
        </div>
      )}

      <div className="checkout-main-content">
        <div className="checkout-steps-section">
          
          {/* Step 1: Customer Information */}
          <div className={`checkout-step ${activeStep >= 1 ? 'active' : ''}`}>
            <div 
              className="step-header" 
              onClick={() => setActiveStep(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className={`step-number ${activeStep > 1 ? 'completed' : ''}`}>
                {activeStep > 1 ? <CheckCircle2 size={24} /> : '1'}
              </div>
              <h2 className="step-title">Customer Information</h2>
              {activeStep === 1 && <button className="login-link">Login for faster checkout</button>}
            </div>

            {activeStep === 1 && (
              <div className="step-content">
                <form onSubmit={(e) => handleNextStep(e, 2)}>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-input" 
                      placeholder="alex@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="checkbox-group">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      name="newsletter"
                      className="form-checkbox" 
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="newsletter" className="checkbox-label">Keep me updated on news and exclusive offers</label>
                  </div>
                  <button type="submit" className="btn-continue btn-full-mobile">Continue to Shipping</button>
                </form>
              </div>
            )}
          </div>

          {/* Step 2: Shipping Address */}
          <div className={`checkout-step ${activeStep >= 2 ? 'active' : ''}`}>
            <div 
              className="step-header"
              onClick={() => activeStep > 1 && setActiveStep(2)}
              style={{ cursor: activeStep > 1 ? 'pointer' : 'default' }}
            >
              <div className={`step-number ${activeStep > 2 ? 'completed' : ''}`}>
                {activeStep > 2 ? <CheckCircle2 size={24} /> : '2'}
              </div>
              <h2 className="step-title">Shipping Address</h2>
            </div>

            {activeStep === 2 && (
              <div className="step-content">
                <form onSubmit={(e) => handleNextStep(e, 3)}>
                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label className="form-label">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        className="form-input" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group flex-1">
                      <label className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        className="form-input" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                      <label className="form-label">Address</label>
                      <input 
                        type="text" 
                        name="address"
                        className="form-input" 
                        placeholder="123 Tech Avenue" 
                        value={formData.address}
                        onChange={handleInputChange}
                        required 
                      />
                  </div>
                  <div className="form-row">
                    <div className="form-group flex-2">
                      <label className="form-label">City</label>
                      <input 
                        type="text" 
                        name="city"
                        className="form-input" 
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group flex-1">
                      <label className="form-label">State</label>
                      <select 
                        name="state"
                        className="form-select" 
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select...</option>
                        <option value="IE">Ireland</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>
                    <div className="form-group flex-1">
                      <label className="form-label">ZIP Code</label>
                      <input 
                        type="text" 
                        name="zipCode"
                        className="form-input" 
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-continue btn-full-mobile">Continue to Payment</button>
                </form>
              </div>
            )}
          </div>

          {/* Step 3: Shipping Method */}
          <div className={`checkout-step ${activeStep >= 3 ? 'active' : ''}`}>
            <div 
              className="step-header"
              onClick={() => activeStep > 2 && setActiveStep(3)}
              style={{ cursor: activeStep > 2 ? 'pointer' : 'default' }}
            >
              <div className={`step-number ${activeStep > 3 ? 'completed' : ''}`}>
                {activeStep > 3 ? <CheckCircle2 size={24} /> : '3'}
              </div>
              <h2 className="step-title">Shipping Method</h2>
            </div>

            {activeStep === 3 && (
              <div className="step-content">
                <form onSubmit={(e) => handleNextStep(e, 4)}>
                    <label className={`shipping-method-card ${shippingMethod === 'standard' ? 'selected' : ''}`}>
                      <div className="sm-left">
                        <input 
                          type="radio" 
                          name="shipping" 
                          className="sm-radio"
                          checked={shippingMethod === 'standard'}
                          onChange={() => setShippingMethod('standard')}
                        />
                        <div className="sm-info">
                          <span className="sm-title">Standard Shipping</span>
                          <span className="sm-desc">3-5 business days</span>
                        </div>
                      </div>
                      <span className="sm-price">{cartTotal > 500 ? 'FREE' : '$4.99'}</span>
                    </label>

                    <label className={`shipping-method-card ${shippingMethod === 'express' ? 'selected' : ''}`}>
                      <div className="sm-left">
                        <input 
                          type="radio" 
                          name="shipping" 
                          className="sm-radio"
                          checked={shippingMethod === 'express'}
                          onChange={() => setShippingMethod('express')}
                        />
                        <div className="sm-info">
                          <span className="sm-title">Express Shipping</span>
                          <span className="sm-desc">1-2 business days</span>
                        </div>
                      </div>
                      <span className="sm-price">$12.99</span>
                    </label>

                  <button type="submit" className="btn-continue btn-full-mobile">Continue to Payment Options</button>
                </form>
              </div>
            )}
          </div>

          {/* Step 4: Payment Method */}
          <div className={`checkout-step ${activeStep >= 4 ? 'active' : ''}`}>
            <div 
              className="step-header"
              onClick={() => activeStep > 3 && setActiveStep(4)}
              style={{ cursor: activeStep > 3 ? 'pointer' : 'default' }}
            >
              <div className="step-number">
                4
              </div>
              <h2 className="step-title">Payment Method</h2>
            </div>

            {activeStep === 4 && (
              <div className="step-content">
                <div className="payment-security-notice">
                  All transactions are secure and encrypted.
                  <div className="payment-icons">
                    💳 💵
                  </div>
                </div>

                <div className="payment-tabs">
                  <button 
                    className={`pay-tab ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <CreditCard size={24} />
                    CARD
                  </button>
                  <button 
                    className={`pay-tab ${paymentMethod === 'pix' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('pix')}
                  >
                    <Landmark size={24} />
                    PIX/TRANSFER
                  </button>
                  <button 
                    className={`pay-tab ${paymentMethod === 'paypal' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <Wallet size={24} />
                    PAYPAL
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="card-form">
                    <div className="form-group">
                      <label className="form-label">Card Number</label>
                      <div className="card-input-wrapper">
                        <input 
                          type="text" 
                          name="cardNumber"
                          className="form-input card-input" 
                          placeholder="0000 0000 0000 0000" 
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                        />
                        <LockIcon />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group flex-1">
                        <label className="form-label">Expiration Date</label>
                        <input 
                          type="text" 
                          name="expirationDate"
                          className="form-input" 
                          placeholder="MM/YY" 
                          value={formData.expirationDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group flex-1">
                        <label className="form-label">Security Code (CVV)</label>
                        <input 
                          type="text" 
                          name="cvv"
                          className="form-input" 
                          placeholder="123" 
                          value={formData.cvv}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="checkout-summary-section desktop-only">
          {/* Right Sidebar */}
          <div className="checkout-items-preview">
            {cart.map(item => (
              <div key={item.id} className="summary-mini-item">
                <div className="smi-image-container">
                  <img src={item.image} alt={item.title} className="smi-image" />
                  <span className="smi-badge">{item.quantity}</span>
                </div>
                <div className="smi-info">
                  <span className="smi-title">{item.title}</span>
                  <span className="smi-desc">SKU: {item.sku}</span>
                </div>
                <span className="smi-price">€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <OrderSummary 
            subtotal={cartTotal} 
            itemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            shipping={shippingCost}
            tax={tax}
            isCartPage={false}
          />

          <div className="guarantee-box">
            <ShieldCheck size={24} className="guarantee-icon" />
            <div className="guarantee-content">
              <span className="guarantee-title">TechFix-It Guarantee</span>
              <span className="guarantee-desc">30-day money-back guarantee on all parts. Easy returns, no questions asked.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: '12px', top: '12px' }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

import { ArrowLeft, ArrowRight, ShoppingCart, ChevronDown, Check, Lock } from 'lucide-react';
