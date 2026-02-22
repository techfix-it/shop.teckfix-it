import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutClient from '@/app/checkout/CheckoutClient';
import './Checkout.css';

export default function CheckoutPage() {
  return (
    <div className="checkout-page-layout">
      <Header />
      <main className="checkout-page-main">
        <div className="checkout-header-slim">
            <h1 className="secure-checkout-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', color: '#2563eb' }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Secure Checkout
            </h1>
            <div className="checkout-breadcrumb">
              Cart <span className="crumb-sep">›</span> <b>Information & Payment</b>
            </div>
        </div>
        <CheckoutClient />
      </main>
      <Footer />
    </div>
  );
}
