import Link from 'next/link';
import './home.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, LifeBuoy, ShieldCheck, Wallet, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-layout">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="home-container hero-content">
            <div className="hero-text">
              <span className="hero-badge">NEW ARRIVAL</span>
              <h1 className="hero-title">Elite Performance Gaming PCs</h1>
              <p className="hero-subtitle">
                Experience unrivaled speed and visuals with our latest custom-built workstations and gaming rigs, powered by RTX 40-Series GPUs.
              </p>
              <div className="hero-actions">
                <Link href="/shop" className="btn-primary">Shop Now</Link>
                <Link href="/shop" className="btn-outline">Build Your Own</Link>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800&h=800" alt="Gaming PC" className="hero-image" />
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="features-strip">
          <div className="home-container features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Package size={24} />
              </div>
              <div className="feature-text">
                <h4>Free Shipping</h4>
                <p>On orders over €500</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <LifeBuoy size={24} />
              </div>
              <div className="feature-text">
                <h4>Expert Support</h4>
                <p>Direct tech assistance</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div className="feature-text">
                <h4>2 Year Warranty</h4>
                <p>On all electronics</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Wallet size={24} />
              </div>
              <div className="feature-text">
                <h4>Secure Payment</h4>
                <p>100% encrypted checkout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="categories-section">
          <div className="home-container">
            <div className="section-header">
              <h2 className="section-title">Shop by Category</h2>
              <Link href="/shop" className="view-all-link">View All Categories <ArrowRight size={16} /></Link>
            </div>
            <div className="categories-grid">
              <Link href="/shop?category=cpus" className="category-card">
                <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=200&h=200" alt="CPUs" />
                <span>CPUs</span>
              </Link>
              <Link href="/shop?category=gpus" className="category-card">
                <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=200&h=200" alt="Graphics Cards" />
                <span>Graphics Cards</span>
              </Link>
              <Link href="/shop?category=laptops" className="category-card">
                <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=200&h=200" alt="Laptops" />
                <span>Laptops</span>
              </Link>
              <Link href="/shop?category=networking" className="category-card">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200&h=200" alt="Networking" />
                <span>Networking</span>
              </Link>
              <Link href="/shop?category=storage" className="category-card">
                <img src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=200&h=200" alt="Storage" />
                <span>Storage</span>
              </Link>
              <Link href="/shop?category=servers" className="category-card">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=200&h=200" alt="Servers" />
                <span>Servers</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Hardware */}
        <section className="featured-section">
          <div className="home-container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Featured Hardware</h2>
                <p className="section-subtitle">Top-rated tech handpicked by our experts.</p>
              </div>
              <div className="slider-controls">
                <button className="slider-btn"><ChevronLeft size={20} /></button>
                <button className="slider-btn"><ChevronRight size={20} /></button>
              </div>
            </div>

            <div className="home-products-grid">
              {/* Product 1 */}
              <div className="home-product-card">
                <span className="badge discount">SALE</span>
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400&h=300" alt="ASUS ROG" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">LAPTOPS</span>
                  <h3 className="product-title">ASUS ROG Zephyrus G14 Gaming Laptop - Ryzen 9, RTX 4070</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(112 REVIEWS)</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">€1,849.00</span>
                    <span className="original-price">€2,199.00</span>
                  </div>
                  <button className="btn-add-cart-full">Add to Cart</button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="home-product-card">
                <span className="badge condition grade-a">NEW</span>
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400&h=300" alt="GPU" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">GRAPHICS CARDS</span>
                  <h3 className="product-title">NVIDIA GeForce RTX 4080 Super Founders Edition 16GB</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(54 REVIEWS)</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">€1,199.00</span>
                  </div>
                  <button className="btn-add-cart-full">Add to Cart</button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="home-product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=400&h=300" alt="iPhone" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">MOBILE</span>
                  <h3 className="product-title">iPhone 15 Pro Max 256GB - Titanium Gray</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(31 REVIEWS)</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">€1,399.00</span>
                  </div>
                  <button className="btn-add-cart-full">Add to Cart</button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="home-product-card">
                <span className="badge feature">RESTOCK</span>
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=300" alt="Switch" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">NETWORKING</span>
                  <h3 className="product-title">Ubiquiti UniFi Pro 24-Port Gigabit PoE Managed Switch</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(28 REVIEWS)</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">€429.00</span>
                  </div>
                  <button className="btn-add-cart-full">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Strip */}
        <section className="brands-strip">
          <div className="home-container">
            <div className="brands-grid">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" alt="Lenovo" className="brand-logo lenovo-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="brand-logo apple-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" alt="Dell" className="brand-logo dell-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="brand-logo hp-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="brand-logo microsoft-logo" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" alt="Samsung" className="brand-logo samsung-logo" />
            </div>
          </div>
        </section>

        {/* Banners */}
        <section className="banners-section">
          <div className="home-container banners-grid">
            <div className="banner-card corporate">
              <div className="banner-content">
                <h2>Corporate Solutions</h2>
                <p>Scalable server architecture and network deployment for business.</p>
                <Link href="#" className="btn-outline-white">Learn More</Link>
              </div>
            </div>
            <div className="banner-card workflow">
              <div className="banner-content">
                <h2>Refined Workflow</h2>
                <p>The best ergonomic keyboards and 4K displays for productivity.</p>
                <Link href="/shop" className="btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
