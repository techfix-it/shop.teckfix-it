'use client';
import './order-tracking.css';

export default function OrderTracking() {
  return (
    <>

      <main style={{ maxWidth: '64rem', margin: '0 auto', padding: '2rem 1rem' }}>
        <div className="tracking-header">
          <h1 className="tracking-title">Track Your Order</h1>
          <p className="tracking-subtitle">Enter your order number or tracking ID to see real-time updates.</p>
          <div className="tracking-search-bar">
            <div className="tracking-search-input">
              <span className="material-symbols-outlined">local_shipping</span>
              <input placeholder="e.g., TF-12345678" type="text" defaultValue="TF-9283-4721" />
            </div>
            <button className="btn-track">Track</button>
          </div>
        </div>

        <div className="tracking-card">
          <div className="tracking-card-header">
            <div>
              <span className="tracking-status-label">Order Status</span>
              <h2 className="tracking-status-value">Shipped</h2>
              <p className="tracking-status-desc">Carrier: FedEx Express • #TRK928103948</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="tracking-status-label">Estimated Delivery</span>
              <h3 className="tracking-est-value">Oct 24, 2023</h3>
              <p className="tracking-est-time">By 8:00 PM</p>
            </div>
          </div>

          <div className="tracking-timeline">
            <div className="timeline-track">
              <div className="timeline-bg"></div>
              <div className="timeline-progress"></div>

              <div className="timeline-step active">
                <div className="timeline-icon active">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <span className="timeline-label">Placed</span>
              </div>
              <div className="timeline-step active">
                <div className="timeline-icon active">
                  <span className="material-symbols-outlined">inventory_2</span>
                </div>
                <span className="timeline-label">Processing</span>
              </div>
              <div className="timeline-step current">
                <div className="timeline-icon current">
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <span className="timeline-label">Shipped</span>
              </div>
              <div className="timeline-step">
                <div className="timeline-icon">
                  <span className="material-symbols-outlined">home_pin</span>
                </div>
                <span className="timeline-label">Out for Delivery</span>
              </div>
              <div className="timeline-step">
                <div className="timeline-icon">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <span className="timeline-label">Delivered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tracking-grid">
          <div>
            <h3 className="history-section-title">
              <span className="material-symbols-outlined">history</span>
              Shipment History
            </h3>
            
            <div className="history-card">
              <div className="history-item primary">
                <div className="history-time">
                  <p className="history-date">Oct 22, 2023</p>
                  <p className="history-hour">09:14 AM</p>
                </div>
                <div className="history-node">
                  <div className="node-dot active"></div>
                  <div className="node-line"></div>
                </div>
                <div className="history-details">
                  <p className="history-event">Arrived at Regional Distribution Center</p>
                  <p className="history-location">San Francisco, CA</p>
                </div>
              </div>

              <div className="history-item">
                <div className="history-time">
                  <p className="history-date">Oct 21, 2023</p>
                  <p className="history-hour">11:45 PM</p>
                </div>
                <div className="history-node">
                  <div className="node-dot"></div>
                  <div className="node-line"></div>
                </div>
                <div className="history-details">
                  <p className="history-event">Departed from Sorting Facility</p>
                  <p className="history-location">Los Angeles, CA</p>
                </div>
              </div>

              <div className="history-item">
                <div className="history-time">
                  <p className="history-date">Oct 21, 2023</p>
                  <p className="history-hour">02:30 PM</p>
                </div>
                <div className="history-node">
                  <div className="node-dot"></div>
                  <div className="node-line"></div>
                </div>
                <div className="history-details">
                  <p className="history-event">Picked up by carrier</p>
                  <p className="history-location">TechFix-It Hub, San Jose, CA</p>
                </div>
              </div>

              <div className="history-item">
                <div className="history-time">
                  <p className="history-date">Oct 20, 2023</p>
                  <p className="history-hour">10:00 AM</p>
                </div>
                <div className="history-node">
                  <div className="node-dot"></div>
                </div>
                <div className="history-details">
                  <p className="history-event">Order processed and ready for shipment</p>
                  <p className="history-location">Warehouse 4, San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="info-card">
              <h3 className="info-card-title">
                <span className="material-symbols-outlined">location_on</span>
                Delivery Address
              </h3>
              <div className="address-details">
                <p className="address-name">Alex Johnson</p>
                <p>123 Innovation Drive, Suite 400</p>
                <p>San Francisco, CA 94103</p>
                <p>United States</p>
              </div>
            </div>

            <div className="support-box">
              <h3 className="support-title">Need help?</h3>
              <p className="support-desc">Our support team is available 24/7 for any questions regarding your delivery.</p>
              <div>
                <button className="btn-support">
                  <span className="material-symbols-outlined">support_agent</span>
                  Contact Support
                </button>
                <button className="btn-outline">
                  <span className="material-symbols-outlined">help</span>
                  Shipping FAQs
                </button>
              </div>
            </div>

            <div className="promo-box">
              <img className="promo-image" data-alt="High tech wireless keyboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOdO5RqsdWWw8WJVbQ0CzMZV9fw3A--tUfYwTifMVUwdbRG0SOBvBm5dZ5bA6X2fJm9l3hVPMvXiLEGGXNaIjdLtj_jnh8TcC9BOrixgmc737LwEANWqeyI_3HHjM-KGkTOI68gz5GYwzLHMBPojQUut3XeAODxsyOI8IzEPoLttI-2Jn8GqCUcBFlcVLeTHnd75bKzGcc91pFAstnNbP4pm3tjAvwhVRDrWtqe33jjhyxPc0s2dOPfSdsZn2DwMKZLjmFFPWgutvY" />
              <div className="promo-content">
                <span className="promo-tag">Tech Upgrade</span>
                <h4 className="promo-title">Precision Mechanical Keyboards</h4>
                <p className="promo-desc">Shop our newest pro collection.</p>
                <a className="promo-link" href="#">Shop Now <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
