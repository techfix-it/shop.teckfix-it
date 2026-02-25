"use client";

import Link from 'next/link';
import './BrandsStrip.css';

export default function BrandsStrip() {
  return (
    <section className="brands-strip">
      <div className="home-container">
        <div className="brands-grid">
          <Link href="/shop/brand/lenovo" aria-label="Shop Lenovo products"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" alt="Lenovo" className="brand-logo lenovo-logo" /></Link>
          <Link href="/shop/brand/apple" aria-label="Shop Apple products"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="brand-logo apple-logo" /></Link>
          <Link href="/shop/brand/dell" aria-label="Shop Dell products"><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" alt="Dell" className="brand-logo dell-logo" /></Link>
          <Link href="/shop/brand/hp" aria-label="Shop HP products"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="HP" className="brand-logo hp-logo" /></Link>
          <Link href="/shop/brand/microsoft" aria-label="Shop Microsoft products"><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="brand-logo microsoft-logo" /></Link>
          <Link href="/shop/brand/samsung" aria-label="Shop Samsung products"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" alt="Samsung" className="brand-logo samsung-logo" /></Link>
        </div>
      </div>
    </section>
  );
}
