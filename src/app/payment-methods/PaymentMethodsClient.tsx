'use client';
import './payment-methods.css';
import '@/app/profile/profile.css'; // Reuse generic layout styles
import Sidebar from '@/components/Sidebar';
import mockUser from '@/app/api/test/mock/user.json';
import { Pencil, Trash2, CreditCard, PlusCircle } from 'lucide-react';

export default function PaymentMethodsClient() {
  const { paymentMethods } = mockUser;

  return (
    <div className="profile-page-wrapper">
      <main className="profile-layout">
        <Sidebar />

        <section className="payment-content">
          <div className="payment-header">
            <div>
              <h1 className="payment-title">Payment Methods</h1>
              <p className="payment-subtitle">Manage your saved credit cards and payment options.</p>
            </div>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={18} />
              Add New Method
            </button>
          </div>

          <div className="payment-grid">
            {paymentMethods.map((method) => (
              <div key={method.id} className="payment-card">
                <div className="payment-card-header">
                  {method.isDefault ? (
                    <span className="badge-default">DEFAULT PAYMENT</span>
                  ) : <div></div>}
                  <div className="payment-card-actions">
                    <button className="icon-btn"><Pencil size={18} /></button>
                    <button className="icon-btn"><Trash2 size={18} /></button>
                  </div>
                </div>

                <div className="payment-card-body">
                  <div className="payment-brand-section">
                    <div className="payment-icon-wrapper">
                      {method.icon ? (
                         <img src={method.icon} alt={method.brand} className="payment-icon-img" />
                      ) : (
                         <CreditCard size={32} className="payment-icon" />
                      )}
                    </div>
                    <div className="payment-details">
                      <h3 className="payment-brand">{method.brand} ending in {method.last4}</h3>
                      <p className="payment-expiry">Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div className="payment-holder">
                    <span className="holder-label">Name on card</span>
                    <span className="holder-name">{method.holderName}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Payment Method Card */}
            <div className="payment-card add-new-card">
              <div className="add-new-content">
                <div className="add-new-icon-wrapper" style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={32} strokeWidth={1.5} />
                  <div style={{ position: 'absolute', bottom: -4, right: -4, backgroundColor: 'white', borderRadius: '50%' }}>
                    <PlusCircle size={20} fill="white" color="#94a3b8" />
                  </div>
                </div>
                <h3 className="add-new-title">Add New Payment Method</h3>
                <p className="add-new-subtitle">Link a new credit card or PayPal account</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
