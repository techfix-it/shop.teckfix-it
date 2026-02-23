"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './CategoriesSection.css';
import mockCategories from '@/app/api/test/mock/mock_categorias.json';

// Helper to find subcategory by name to extract its image dynamically
const getSubcategoryImage = (name: string) => {
  for (const cat of mockCategories.menu_categories) {
    const sub = cat.subcategories.find((s: { name: string; image_url: string }) => s.name === name);
    if (sub) return sub.image_url;
  }
  return ''; // fallback if not found
};

const DISPLAY_CATEGORIES = [
  { 
    title: 'CPUs', 
    query: 'cpus', 
    image: getSubcategoryImage('Processors (CPU)') 
  },
  { 
    title: 'Graphics Cards', 
    query: 'gpus', 
    image: getSubcategoryImage('Graphics Cards (GPU)') 
  },
  { 
    title: 'Laptops', 
    query: 'laptops', 
    image: getSubcategoryImage('Laptops/Notebooks') 
  },
  { 
    title: 'Networking', 
    query: 'networking', 
    image: getSubcategoryImage('Wireless Routers/HomePlugs') 
  },
  { 
    title: 'Storage', 
    query: 'storage', 
    image: getSubcategoryImage('Storage (SSD/HDD)') 
  },
  { 
    title: 'Servers', 
    query: 'servers', 
    image: getSubcategoryImage('Server Software') 
  },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="home-container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <Link href="/shop" className="view-all-link">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>
        <div className="categories-grid">
          {DISPLAY_CATEGORIES.map((category) => (
            <Link 
              key={category.query} 
              href={`/shop?category=${category.query}`} 
              className="category-card"
            >
              {category.image && <img src={category.image} alt={category.title} />}
              <span>{category.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
