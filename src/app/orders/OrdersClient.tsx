'use client';
import './orders.css';
import '@/app/profile/profile.css'; // Reuse generic layout styles
import Sidebar from '@/components/Sidebar';
import mockUser from '@/app/api/test/mock/user.json';
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function OrdersClient() {
  const { orders } = mockUser;
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All Statuses');

  // Basic filtering mock implementation
  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.id.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'All Statuses') return matchesSearch;
    return matchesSearch && o.status === filter;
  });

  return (
    <div className="profile-page-wrapper">
      <main className="profile-layout">
        <Sidebar />

        <section className="orders-content">
        <div className="orders-header">
          <h1 className="orders-title">Order History</h1>
          <div className="orders-filter-group">
            <span className="orders-filter-label">Show:</span>
            <select className="orders-filter-select">
              <option>Last 6 months</option>
              <option>Last 30 days</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>

        <div className="orders-actions">
          <div className="orders-search">
            <Search className="orders-search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by Order ID (e.g. #TF-12345)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="orders-quick-filters">
            <button className={filter === 'All Statuses' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('All Statuses')}>
              All Statuses <ChevronDown size={14} style={{verticalAlign: 'text-bottom', marginLeft: '2px'}}/>
            </button>
            <button className={filter === 'Delivered' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('Delivered')}>
              Delivered
            </button>
            <button className={filter === 'Processing' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('Processing')}>
              Processing
            </button>
          </div>
        </div>

        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th className="order-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td className="order-date">{new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="order-total">
                    {order.currency === 'USD' ? '$' : '€'}{order.total.toFixed(2)}
                  </td>
                  <td className="order-action">
                    <button className="btn-view-details">View Details</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} style={{textAlign: 'center', padding: '3rem'}}>No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="orders-pagination">
          <div className="pagination-info">
            Showing <strong>1</strong> to <strong>{filteredOrders.length}</strong> of <strong>{filteredOrders.length}</strong> results
          </div>
          <div className="pagination-controls">
            <button className="page-btn" disabled>&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">&gt;</button>
          </div>
        </div>

        {/* Support Banner directly injected into Orders like on the mock */}
        <div className="banner-cta" style={{ marginTop: '3rem', cursor: 'default' }}>
          <div className="banner-content">
            <span className="banner-badge">Support</span>
            <h2 className="banner-title">Need help with an order?</h2>
            <p className="banner-desc">Our expert support team is available 24/7 to help you track shipments, handle returns, or answer technical questions.</p>
          </div>
          <button className="btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary-600)', padding: '0.75rem 2rem' }}>
            Contact Support
          </button>
        </div>

      </section>
      </main>
    </div>
  );
}
