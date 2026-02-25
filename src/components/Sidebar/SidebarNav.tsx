'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, History, CreditCard, MapPin, LogOut } from 'lucide-react';

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="sidebar-nav">
      <Link href="/profile" className={`nav-item ${pathname === '/profile' ? 'active' : ''}`}>
        <User size={20} className="nav-icon" />
        <span>Profile Info</span>
      </Link>
      <Link href="/orders" className={`nav-item ${pathname.startsWith('/order') ? 'active' : ''}`}>
        <History size={20} className="nav-icon" />
        <span>Order History</span>
      </Link>
      <Link href="/payment-methods" className={`nav-item ${pathname === '/payment-methods' ? 'active' : ''}`}>
        <CreditCard size={20} className="nav-icon" />
        <span>Payment Methods</span>
      </Link>
      <Link href="/addresses" className={`nav-item ${pathname === '/addresses' ? 'active' : ''}`}>
        <MapPin size={20} className="nav-icon" />
        <span>Addresses</span>
      </Link>
      <div className="nav-divider"></div>
      <button className="nav-item danger" style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}>
        <LogOut size={20} className="nav-icon" />
        <span>Sign Out</span>
      </button>
    </nav>
  );
}
