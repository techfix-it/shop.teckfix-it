'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, StarHalf, CheckCircle, ChevronRight, ShoppingCart, Minus, Plus, Truck, ChevronDown, ChevronUp } from 'lucide-react';
import RelatedProductsSection from '@/components/product_detail_components/RelatedProductsSection';

export default function ProductDetailClient({ product, allProducts }: { product: any, allProducts: any[] }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  // Mocking 5 dummy images for the gallery since we only have 1 in JSON
  const galleryImages = [
    product.image,
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600&h=600',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=600&h=600',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600&h=600',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600&h=600',
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600&h=600',
  ];

  // Price conversion (mock logic for the discount shown in screenshot)
  const priceNum = parseFloat(product.price.replace('€', '').replace(',', ''));
  const oldPrice = '€' + (priceNum * 1.1).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const monthly = '€' + (priceNum / 12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });


  // specs mock
  const specs = [
    { label: 'PROCESSOR', value: 'AMD Threadripper™ PRO 5995WX (64 Cores, 128 Threads, Up to 4.5GHz)' },
    { label: 'GRAPHICS', value: 'Dual NVIDIA RTX™ A6000 (48GB GDDR6 ECC VRAM each) with NVLink' },
    { label: 'MEMORY', value: '256GB (8x32GB) DDR4 3200MHz ECC Registered Memory' },
    { label: 'STORAGE', value: '4TB NVMe PCIe Gen4 M.2 SSD + 12TB 7200RPM Enterprise SATA HDD' },
    { label: 'NETWORK', value: 'Dual 10GbE SFP+ Ports + Intel Wi-Fi 6E AX210 with Bluetooth 5.3' },
    { label: 'POWER SUPPLY', value: '1600W 80+ Titanium Certified Fully Modular PSU' },
    { label: 'OPERATING SYSTEM', value: 'Windows 11 Pro for Workstations / Ubuntu 22.04 LTS Pre-installed' },
  ];

  return (
    <div className="product-detail-container">
      {/* Breadcrumb */}
      <nav className="product-breadcrumb">
        <Link href="/">Home</Link>
        <ChevronRight size={14} />
        <Link href={`/shop?category=${product.category.toLowerCase().replace(/ /g, '-')}`}>{product.category}</Link>
        <ChevronRight size={14} />
        <span className="current-crumb">{product.title}</span>
      </nav>

      {/* Top Section */}
      <div className="product-top-section">
        
        {/* Gallery */}
        <div className="product-gallery">
          <div className="main-image-container">
            <img src={galleryImages[activeImage]} alt={product.title} className="main-image" />
          </div>
          <div className="thumbnail-list">
             {galleryImages.slice(0, 5).map((img, idx) => (
                <button 
                  key={idx} 
                  className={`thumbnail-btn ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`Thumb ${idx}`} />
                  {idx === 4 && galleryImages.length > 5 && (
                    <div className="thumb-overlay">+{galleryImages.length - 5}</div>
                  )}
                </button>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info-panel">
          {product.badge && (
            <div className={`product-badge badge-${product.badge.type}`}>
              {product.badge.text}
            </div>
          )}
          
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">
             High-performance {product.category.toLowerCase()} designed for demanding tasks. Built with premium components to ensure maximum reliability and speed.
          </p>

          <div className="product-meta">
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                i < Math.floor(product.rating) ? <Star key={i} size={16} fill="#0c18ba" color="#0c18ba" /> :
                i === Math.floor(product.rating) && product.rating % 1 !== 0 ? <StarHalf key={i} size={16} fill="#0c18ba" color="#0c18ba" /> :
                <Star key={i} size={16} color="#d1d5db" />
              ))}
              <span className="reviews-count">({product.reviews} Reviews)</span>
            </div>
            <div className="stock-status">
              <CheckCircle size={16} color="#10b981" />
              <span>In Stock</span>
            </div>
          </div>

          <div className="product-price-box">
             <div className="price-main">
               <span className="current-price">{product.price}</span>
               <span className="old-price">{oldPrice}</span>
             </div>
             <div className="price-monthly">
               Or {monthly}/mo for 12 months with TechPay
             </div>

             <div className="action-row">
               <div className="quantity-selector">
                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn"><Minus size={16}/></button>
                 <span className="qty-value">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="qty-btn"><Plus size={16}/></button>
               </div>
               <button className="btn-add-to-cart">
                  <ShoppingCart size={18} />
                  Add to Cart
               </button>
             </div>
             
             <button className="btn-buy-now">
               Buy Now
             </button>

             <div className="features-row">
               <div className="feature-item">
                 <Truck size={20} color="#0c18ba" className="feature-icon" />
                 <div>
                   <div className="feature-title">Free Shipping</div>
                   <div className="feature-sub">Expedited 2-3 day delivery</div>
                 </div>
               </div>
               <div className="feature-item">
                 <CheckCircle size={20} color="#0c18ba" className="feature-icon" />
                 <div>
                   <div className="feature-title">3-Year Warranty</div>
                   <div className="feature-sub">Next-day onsite support</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Tech Specs */}
      <div className="product-specs-section">
        <div 
          className="section-header specs-header-mobile" 
          onClick={() => setIsSpecsOpen(!isSpecsOpen)}
        >
          <h2 className="section-title">Technical Specifications</h2>
          <button className="btn-toggle-specs">
            {isSpecsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className={`specs-table-container ${isSpecsOpen ? 'open' : ''}`}>
          <div className="specs-table">
            {specs.map((spec, i) => (
              <div className="spec-row" key={i}>
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProductsSection currentProduct={product} allProducts={allProducts} />
    </div>
  );
}
