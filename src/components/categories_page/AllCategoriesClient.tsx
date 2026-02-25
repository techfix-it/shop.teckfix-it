'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './CategoriesPage.css';
import mockCategories from '@/app/api/test/mock/mock_categorias.json';

// --- Sub-components ---

function CategoryCard({ title, slug, imageUrl, description }: { title: string, slug: string, imageUrl: string, description: string }) {
  return (
    <Link href={`/shop/category/${slug}`} className="category-card-item">
      <div className="category-card-image-wrap">
        <img src={imageUrl} alt={title} className="category-card-image" loading="lazy" />
      </div>
      <div className="category-card-content">
        <h4 className="category-card-title">
          {title}
          <ArrowRight size={18} className="category-card-icon" />
        </h4>
        <p className="category-card-desc">{description}</p>
      </div>
    </Link>
  );
}

function CategorySection({ title, presentation, subcategories }: { title: string, presentation: string, subcategories: any[] }) {
  return (
    <div className="category-group">
      <div className="category-group-header">
        <h2 className="category-group-title">{title}</h2>
        <p className="category-group-desc">{presentation}</p>
      </div>
      <div className="category-grid">
        {subcategories.map((sub, idx) => (
          <CategoryCard 
            key={idx}
            title={sub.name}
            slug={sub.category_slug}
            imageUrl={sub.image_url}
            description={sub.description}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Page Client ---

export default function AllCategoriesClient() {
  const { menu_categories } = mockCategories;

  return (
    <main className="categories-page-layout">
      {/* Header Banner */}
      <section className="categories-page-header">
        <h1 className="categories-page-title">Explore All Categories</h1>
        <p className="categories-page-subtitle">From high-end gaming rigs and enterprise servers to the finest peripherals. Find everything you need to upgrade your setup.</p>
      </section>

      {/* Categories Content */}
      <section className="categories-container">
        {menu_categories.map((catGroup, idx) => (
          <CategorySection 
            key={idx}
            title={catGroup.category}
            presentation={catGroup.presentation}
            subcategories={catGroup.subcategories}
          />
        ))}
      </section>
    </main>
  );
}
