'use client';
import './order-detail.css';

export default function OrderDetail({ params }: { params: { id: string } }) {
  return (
    <>

      <div className="od-layout">
        <div className="od-breadcrumbs">
          <a className="od-breadcrumb-link" href="#">Home</a>
          <span className="od-breadcrumb-separator">/</span>
          <a className="od-breadcrumb-link" href="#">Orders</a>
          <span className="od-breadcrumb-separator">/</span>
          <span className="od-breadcrumb-current">#TF-98765</span>
        </div>

        <div className="od-header">
          <div className="od-title-area">
            <h1 className="od-title">Order #TF-98765</h1>
            <p className="od-subtitle">Placed on October 24, 2023 • 2:45 PM</p>
          </div>
          <div className="od-actions">
            <button className="btn-print">
              <span className="material-symbols-outlined">print</span> Print Invoice
            </button>
            <button className="btn-track-action">
              Track Shipment
            </button>
          </div>
        </div>

        <div className="od-grid">
          <div className="od-main-column">
            <div className="od-card">
              <div className="od-card-header">
                <h3 className="od-card-title">Order Status: <span className="primary-text">Shipped</span></h3>
                <span className="od-card-subtitle">Estimated Delivery: Oct 27, 2023</span>
              </div>
              <div className="tracker-container">
                <div className="tracker-bar-bg">
                  <div className="tracker-bar-fill"></div>
                </div>
                <div className="tracker-steps">
                  <div className="tracker-step">
                    <div className="tracker-icon completed">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <span className="tracker-label">Confirmed</span>
                  </div>
                  <div className="tracker-step">
                    <div className="tracker-icon completed">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <span className="tracker-label">Processed</span>
                  </div>
                  <div className="tracker-step">
                    <div className="tracker-icon completed">
                      <span className="material-symbols-outlined">local_shipping</span>
                    </div>
                    <span className="tracker-label current">Shipped</span>
                  </div>
                  <div className="tracker-step">
                    <div className="tracker-icon pending">
                      <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                    <span className="tracker-label pending">Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="products-card">
              <div className="products-header">
                <h3 className="products-title">Order Items (3)</h3>
              </div>
              <div className="products-list">
                <div className="product-item">
                  <div className="product-image" data-alt="1TB Internal SSD drive component" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3lpNr5EsDc0u7b2mun74LJxzBGIL2q8zc_iHeZ6ZyCJvlZxm146APPwibmn71IJpAum-yE0yOzIuH-69xMedgVVJl4RqDQ8JObrukMONRFDfAyYVWb8UnBBjpoelGWtzHUR6nq8WgTwNqN4gXGSj4EQ5I4ddizoxLY7pS9dCBFQlhb71PqosgZsPv5A13P7Pu6b3RF9q9W_6R2a8VXLF8gF4tETvdrxKJX_pHikc-5wh8grFMkRILn2OrmKZV90ZAhtu6riYsf8g0')" }}></div>
                  <div className="product-details">
                    <div>
                      <h4 className="product-name">TechPro NVMe 1TB SSD</h4>
                      <p className="product-meta">Model: TP-1000N | Replacement Part</p>
                    </div>
                    <div className="product-price-row">
                      <span className="product-qty">Qty: 1</span>
                      <span className="product-price">$129.99</span>
                    </div>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image" data-alt="High quality thermal paste tube" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwk-GSyjbhHIsvL_Bs_SWa_RImWEvNmNh7A0ICQBhPwf0wV-r56fcJsjXfQtK9GGXg533wEI7DpjyDmVThVrMQusTqJN4oHt1YYAyG4PIjXp-ch1aZRPprTjuSD4ijgZRhyp_AskhL0xpb4tGGV4Bsb6rNJ1F2x4FtaPJ3MqP6ZUdX_LxdiyQc-XMFcfRNkhaDVF-_-F1bj7BkRlVKYjTLPPOLdmKayORwrBtitTHoU3WMWMTNiyezUzBctU-YyttURwTHN-1wO1oq')" }}></div>
                  <div className="product-details">
                    <div>
                      <h4 className="product-name">Arctic Chill Thermal Paste</h4>
                      <p className="product-meta">4g Tube | Professional Grade</p>
                    </div>
                    <div className="product-price-row">
                      <span className="product-qty">Qty: 2</span>
                      <span className="product-price">$23.98</span>
                    </div>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image" data-alt="Precision screwdriver repair kit" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8gL3q2s9q1ch1rXMg7yShxX6g3V8EMPVTMr6mMhmQN9HU4O5uWdDhlPIfXlK4qJ7G6qyTpi_5J6NCbIrROaRLgKuoRtAI3dGSw9yU0ivMfjVdhU6S6-YL6QLCm_3xLIP9_ng3JVw2y_aBILP6XEbVx_zZSBd9Xj6fD4BZkUKp0jAFfdifRVLcoFqZEAG4mKCIxdKgnokpm1zMQD87wSxu-76eMhLedUlJAQ6SAsOjbcYMGcqY6GpfobxDOl-aaMNUeTY3cOP0bOS-')" }}></div>
                  <div className="product-details">
                    <div>
                      <h4 className="product-name">Precision Toolkit (24 Bits)</h4>
                      <p className="product-meta">Essential Repair Set</p>
                    </div>
                    <div className="product-price-row">
                      <span className="product-qty">Qty: 1</span>
                      <span className="product-price">$34.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-split-grid">
              <div className="od-card">
                <div className="info-block-title">
                  <span className="material-symbols-outlined">location_on</span>
                  <h4>Shipping Address</h4>
                </div>
                <p className="details-name">Alex Johnson</p>
                <p className="details-text">
                  452 Tech Lane, Suite 102<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
                <p className="details-phone">Phone: (555) 123-4567</p>
              </div>
              <div className="od-card">
                <div className="info-block-title">
                  <span className="material-symbols-outlined">credit_card</span>
                  <h4>Payment Method</h4>
                </div>
                <div className="payment-method">
                  <div className="payment-badge">VISA</div>
                  <p className="payment-card">Visa ending in 4242</p>
                </div>
                <p className="billing-title">Billing Address</p>
                <p className="billing-text">Same as shipping address</p>
              </div>
            </div>
          </div>

          <div className="summary-column">
            <div className="od-card summary-card">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>$188.47</span>
                </div>
                <div className="summary-row">
                  <span>Shipping (Standard)</span>
                  <span>$12.00</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>$15.53</span>
                </div>
                <div className="summary-total">
                  <span className="summary-total-label">Total</span>
                  <span className="summary-total-value">$216.00</span>
                </div>
              </div>
              <div className="summary-actions">
                <button className="btn-help">Need Help?</button>
                <button className="btn-return">Return Items</button>
              </div>
              <div className="eco-banner">
                <div className="eco-content">
                  <span className="material-symbols-outlined">eco</span>
                  <div>
                    <p className="eco-title">Carbon Neutral</p>
                    <p className="eco-desc">This shipment is 100% carbon offset by TechFix-It partners.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-actions">
              <h4 className="quick-actions-title">Quick Actions</h4>
              <ul className="quick-actions-list">
                <li>
                  <a className="quick-action-link" href="#">
                    <span className="material-symbols-outlined">contact_support</span> Contact Support
                  </a>
                </li>
                <li>
                  <a className="quick-action-link" href="#">
                    <span className="material-symbols-outlined">receipt_long</span> View Billing History
                  </a>
                </li>
                <li>
                  <a className="quick-action-link" href="#">
                    <span className="material-symbols-outlined">package_2</span> Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
