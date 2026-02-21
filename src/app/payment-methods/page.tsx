'use client';
import './payment-methods.css';
import Sidebar from '@/components/Sidebar';

export default function PaymentMethods() {
  return (
    <>

      <main className="pm-layout">
        <Sidebar />

        {/* Main Content */}
        <section className="profile-content">
          <div className="pm-header">
            <h1 className="pm-title">Payment Methods</h1>
            <p className="pm-subtitle">Manage your saved cards and payment options for faster checkout.</p>
          </div>

          <div className="add-card-area">
            <button className="btn-add-card">
              <span className="material-symbols-outlined">add</span>
              Add New Card
            </button>
          </div>

          <div className="payment-grid">
            {/* Default Card */}
            <div className="payment-card default-card">
              <div className="default-badge">Default</div>
              
              <div className="card-header">
                <div className="card-brand-icon visa">VISA</div>
                <div className="card-number">•••• •••• •••• 4242</div>
              </div>

              <div className="card-details">
                <div className="detail-group">
                  <span className="detail-label">Name on Card</span>
                  <span className="detail-value">Johnathan Doe</span>
                </div>
                <div className="detail-group">
                  <span className="detail-label">Expires</span>
                  <span className="detail-value">04/26</span>
                </div>
              </div>

              <div className="card-actions">
                <div className="action-links">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn danger">Remove</button>
                </div>
              </div>
            </div>

            {/* Secondary Card */}
            <div className="payment-card">
              <div className="card-header">
                <div className="card-brand-icon mastercard">
                  <div className="mc-circle-1"></div>
                  <div className="mc-circle-2"></div>
                </div>
                <div className="card-number">•••• •••• •••• 8891</div>
              </div>

              <div className="card-details">
                <div className="detail-group">
                  <span className="detail-label">Name on Card</span>
                  <span className="detail-value">John Doe</span>
                </div>
                <div className="detail-group">
                  <span className="detail-label">Expires</span>
                  <span className="detail-value">11/25</span>
                </div>
              </div>

              <div className="card-actions">
                <div className="action-links">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn danger">Remove</button>
                </div>
                <button className="btn-make-default">Set as default</button>
              </div>
            </div>
          </div>

          {/* Other Payment Methods */}
          <h3 className="pm-section-title">Other Payment Methods</h3>
          <div className="other-methods-list">
            <div className="other-method-item">
              <div className="method-info">
                <div className="method-icon">P</div>
                <div>
                  <h4 className="method-name">PayPal</h4>
                  <p className="method-status">john.doe@example.com (Connected)</p>
                </div>
              </div>
              <button className="action-btn danger">Disconnect</button>
            </div>
            
            <div className="other-method-item">
              <div className="method-info">
                <div className="method-icon apple-pay">
                  <span className="material-symbols-outlined">apple</span>
                </div>
                <div>
                  <h4 className="method-name">Apple Pay</h4>
                  <p className="method-status">Not connected</p>
                </div>
              </div>
              <button className="btn-connect">Connect</button>
            </div>
          </div>

          {/* Security Notice */}
          <div className="security-notice">
            <span className="material-symbols-outlined">lock</span>
            <div className="security-notice-text">
              <h4>Secure Payment</h4>
              <p>Your payment information is encrypted and securely stored. We do not save your CVV code on our servers, ensuring maximum protection for your accounts.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
