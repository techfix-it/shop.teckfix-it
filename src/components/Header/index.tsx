'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, User, Search, Truck, HelpCircle, PackageSearch } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerClass = `${styles.header} ${(!isHome || isScrolled) ? styles.scrolled : ''}`;

  return (
    <>
      <header className={headerClass}>
        {/* MAIN NAVIGATION */}
        <div className={styles.mainNavWrapper}>
          <div className={styles.container}>
            
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>TechFix-<span className={styles.logoAccent}>It</span></span>
            </Link>

            <nav className={styles.desktopNav}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/shop" className={styles.navLink}>Shop</Link>
              <Link href="/shop/category/gaming-pcs" className={styles.navLink}>Custom Gaming PCs</Link>
              <Link href="/shop/category/laptops" className={styles.navLink}>Laptops</Link>
              <Link href="/shop/category/monitors" className={styles.navLink}>Monitors</Link>
              <Link href="/shop/category/pcs" className={styles.navLink}>PCs</Link>
              <Link href="/shop/category/smartphones" className={styles.navLink}>Smartphones</Link>
              <Link href="/shop/category/smartwatches" className={styles.navLink}>Smartwatches</Link>
              <Link href="/shop/category/tablets" className={styles.navLink}>Tablets</Link>
              <Link href="/shop/category/workstations" className={styles.navLink}>Workstations</Link>
            </nav>

            <div className={styles.actions}>
              <ThemeToggle />
              
              <Link href="/profile" className={styles.actionBtn}>
                <User size={20} />
              </Link>
              <Link href="/cart" className={styles.actionBtn}>
                <div className={styles.cartWrapper}>
                  <ShoppingCart size={20} />
                  {mounted && cartCount > 0 && (
                    <span className={styles.cartBadge}>{cartCount}</span>
                  )}
                </div>
              </Link>
              
              <button 
                className={styles.mobileToggle}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* TOP BAR (Move to bottom) */}
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            
            <div className={styles.topBarLeft}>
               <div className={styles.shippingInfo}>
                 <Truck className={styles.shippingIcon} size={28} />
                 <div className={styles.shippingTexts}>
                   <span className={styles.shippingTitle}>Free shipping</span>
                   <span className={styles.shippingSub}>Subscribers only</span>
                 </div>
               </div>
            </div>

            <div className={styles.searchContainer}>
              <input type="text" placeholder="Search..." className={styles.searchInput} />
              <button className={styles.searchButton} aria-label="Search">
                <Search size={22} color="white" />
              </button>
            </div>

            <div className={styles.topBarRight}>
              <Link href="/track-order" className={styles.topBarLink}>
                <PackageSearch size={20} />
                <span>Track your Order</span>
              </Link>
              <Link href="/help" className={styles.topBarLink}>
                <span>Help</span>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/shop" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
        <Link href="/shop/category/gaming-pcs" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Custom Gaming PCs</Link>
        <Link href="/shop/category/laptops" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Laptops</Link>
        <Link href="/shop/category/monitors" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Monitors</Link>
        <Link href="/shop/category/pcs" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>PCs</Link>
        <Link href="/shop/category/smartphones" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Smartphones</Link>
        <Link href="/shop/category/smartwatches" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Smartwatches</Link>
        <Link href="/shop/category/tablets" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Tablets</Link>
        <Link href="/shop/category/workstations" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Workstations</Link>
      </div>
    </>
  );
}
