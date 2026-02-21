'use client';
import './order-confirmation.css';

export default function OrderConfirmation() {
  return (
    <>

      <main className="oc-layout">
        <div className="oc-success-header">
          <div className="success-icon-wrapper">
            <span className="material-symbols-outlined">check</span>
          </div>
          <h1 className="oc-title">Thank you for your order!</h1>
          <p className="oc-subtitle">Your order has been placed successfully. We'll send you an email confirmation with tracking details shortly.</p>
        </div>

        <div className="oc-card">
          <div className="oc-card-header">
            <div className="order-info-group">
              <span className="order-label">Order Number</span>
              <span className="order-value highlight">#TF-98765</span>
            </div>
            <div className="order-info-group">
              <span className="order-label">Date</span>
              <span className="order-value">October 24, 2023</span>
            </div>
            <div className="order-info-group">
              <span className="order-label">Estimated Delivery</span>
              <span className="order-value">Oct 27, 2023</span>
            </div>
          </div>

          <div className="oc-card-body">
            <h3 className="oc-section-title">
              <span className="material-symbols-outlined">inventory_2</span>
              Order Summary (3 items)
            </h3>

            <div className="oc-items-list">
              <div className="oc-item">
                <div className="oc-item-img" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3lpNr5EsDc0u7b2mun74LJxzBGIL2q8zc_iHeZ6ZyCJvlZxm146APPwibmn71IJpAum-yE0yOzIuH-69xMedgVVJl4RqDQ8JObrukMONRFDfAyYVWb8UnBBjpoelGWtzHUR6nq8WgTwNqN4gXGSj4EQ5I4ddizoxLY7pS9dCBFQlhb71PqosgZsPv5A13P7Pu6b3RF9q9W_6R2a8VXLF8gF4tETvdrxKJX_pHikc-5wh8grFMkRILn2OrmKZV90ZAhtu6riYsf8g0')" }}></div>
                <div className="oc-item-details">
                  <h4 className="oc-item-name">TechPro NVMe 1TB SSD</h4>
                  <p className="oc-item-qty">Qty: 1</p>
                </div>
                <div className="oc-item-price">$129.99</div>
              </div>

              <div className="oc-item">
                <div className="oc-item-img" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwk-GSyjbhHIsvL_Bs_SWa_RImWEvNmNh7A0ICQBhPwf0wV-r56fcJsjXfQtK9GGXg533wEI7DpjyDmVThVrMQusTqJN4oHt1YYAyG4PIjXp-ch1aZRPprTjuSD4ijgZRhyp_AskhL0xpb4tGGV4Bsb6rNJ1F2x4FtaPJ3MqP6ZUdX_LxdiyQc-XMFcfRNkhaDVF-_-F1bj7BkRlVKYjTLPPOLdmKayORwrBtitTHoU3WMWMTNiyezUzBctU-YyttURwTHN-1wO1oq')" }}></div>
                <div className="oc-item-details">
                  <h4 className="oc-item-name">Arctic Chill Thermal Paste</h4>
                  <p className="oc-item-qty">Qty: 2</p>
                </div>
                <div className="oc-item-price">$23.98</div>
              </div>

              <div className="oc-item">
                <div className="oc-item-img" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8gL3q2s9q1ch1rXMg7yShxX6g3V8EMPVTMr6mMhmQN9HU4O5uWdDhlPIfXlK4qJ7G6qyTpi_5J6NCbIrROaRLgKuoRtAI3dGSw9yU0ivMfjVdhU6S6-YL6QLCm_3xLIP9_ng3JVw2y_aBILP6XEbVx_zZSBd9Xj6fD4BZkUKp0jAFfdifRVLcoFqZEAG4mKCIxdKgnokpm1zMQD87wSxu-76eMhLedUlJAQ6SAsOjbcYMGcqY6GpfobxDOl-aaMNUeTY3cOP0bOS-')" }}></div>
                <div className="oc-item-details">
                  <h4 className="oc-item-name">Precision Toolkit (24 Bits)</h4>
                  <p className="oc-item-qty">Qty: 1</p>
                </div>
                <div className="oc-item-price">$34.50</div>
              </div>
            </div>

            <div className="oc-details-grid">
              <div className="oc-detail-block">
                <h4 className="oc-detail-title">Shipping Address</h4>
                <p className="oc-detail-text">
                  Alex Johnson<br />
                  452 Tech Lane, Suite 102<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
              </div>
              <div className="oc-detail-block">
                <h4 className="oc-detail-title">Payment Method</h4>
                <p className="oc-detail-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold' }}>VISA</span> ending in 4242
                </p>
                <p className="oc-detail-text" style={{ marginTop: '0.5rem' }}>Billing address matches shipping</p>
              </div>
            </div>

            <div className="oc-total-section">
              <div className="oc-total-row">
                <span>Subtotal</span>
                <span>$188.47</span>
              </div>
              <div className="oc-total-row">
                <span>Shipping (Standard)</span>
                <span>$12.00</span>
              </div>
              <div className="oc-total-row">
                <span>Tax</span>
                <span>$15.53</span>
              </div>
              <div className="oc-total-row final">
                <span>Total Paid</span>
                <span className="final-price">$216.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="oc-next-steps">
          <h3 className="oc-next-title">What's Next?</h3>
          <div className="oc-actions">
            <button className="btn-primary">
              <span className="material-symbols-outlined">local_shipping</span> Track Order
            </button>
            <button className="btn-secondary">
              <span className="material-symbols-outlined">shopping_cart</span> Continue Shopping
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
