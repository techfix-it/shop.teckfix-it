'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Sidebar.css';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="profile-sidebar">
      <div className="sidebar-card">
        <div className="user-quick-info">
          <div className="user-quick-avatar">
            <span className="material-symbols-outlined" style={{ fontSize: '24px', fontWeight: 'bold' }}>verified_user</span>
          </div>
          <div>
            <h3 className="user-quick-name">John Doe</h3>
            <p className="user-quick-badge">Pro Member since 2023</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link href="/profile" className={`nav-item ${pathname === '/profile' ? 'active' : ''}`}>
            <span className="material-symbols-outlined">person</span>
            <span>Profile Info</span>
          </Link>
          <Link href="/orders" className={`nav-item ${pathname.startsWith('/order') ? 'active' : ''}`}>
            <span className="material-symbols-outlined">history</span>
            <span>Order History</span>
          </Link>
          <Link href="/payment-methods" className={`nav-item ${pathname === '/payment-methods' ? 'active' : ''}`}>
            <span className="material-symbols-outlined">payments</span>
            <span>Payment Methods</span>
          </Link>
          <Link href="/addresses" className={`nav-item ${pathname === '/addresses' ? 'active' : ''}`}>
            <span className="material-symbols-outlined">location_on</span>
            <span>Addresses</span>
          </Link>
          <div className="nav-divider"></div>
          <button className="nav-item danger" style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}>
            <span className="material-symbols-outlined">logout</span>
            <span>Sign Out</span>
          </button>
        </nav>
      </div>

      <div className="sidebar-support-card">
        <span className="material-symbols-outlined support-icon">support_agent</span>
        <h4 className="support-title">Need technical help?</h4>
        <p className="support-desc">Our experts are available 24/7 for your tech repairs.</p>
        <button className="btn-support-contact">Contact Support</button>
      </div>
    </aside>
  );
}
