'use client';

import { useState, useEffect, useMemo } from 'react';
import '@/app/shop/shop.css';
import ShopHeaderActions from '@/components/shop_components/ShopHeaderActions';
import ProductGrid from '@/components/shop_components/ProductGrid';
import SidebarFilters from '@/components/shop_components/SidebarFilters';
import mockProducts from '@/app/api/test/mock/mock_products.json';
import mockCategorias from '@/app/api/test/mock/mock_categorias.json';
import Link from 'next/link';

interface CategoryClientProps {
  categorySlug: string;
  categoryName: string;
}

const ALL_GLOBAL_BRANDS = Array.from(new Set(
  Object.values(mockCategorias.global_brands_session).flat().map((b: any) => b.name)
));

const doesProductMatchBrand = (product: any, brand: string) => {
  if (product.brand === brand) return true;
  const titleLower = product.title.toLowerCase();
  if (titleLower.includes(brand.toLowerCase())) return true;
  if (brand === 'NVIDIA' && (titleLower.includes('geforce') || titleLower.includes('rtx'))) return true;
  if (brand === 'Apple' && (titleLower.includes('macbook') || titleLower.includes('ipad'))) return true;
  if (brand === 'Ubiquiti' && titleLower.includes('unifi')) return true;
  return false;
};

export default function CategoryClient({ categorySlug, categoryName }: CategoryClientProps) {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Price: Low to High');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(24);
  
  // Filter States
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(25000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  // Fixed Category (user cannot change this filter here)
  const selectedCategories = useMemo(() => [categorySlug], [categorySlug]);

  const parsePrice = (priceStr: string | undefined | null) => {
    if (!priceStr) return 0;
    return parseFloat(String(priceStr).replace(/[^0-9.-]+/g, '')) || 0;
  };

  // Only consider products matching this category slug
  const categoryProducts = useMemo(() => {
    return mockProducts.filter(product => product.category_slug === categorySlug);
  }, [categorySlug]);

  // Calculate available facets dynamically for the given category
  const getAvailableBrands = () => {
    const brands = new Set<string>();
    categoryProducts.forEach(product => {
      const priceValue = parsePrice(product.currentPrice);
      if (priceValue > priceRange) return;
      if (selectedCondition) {
        const isNew = product.badge?.type === 'new';
        const isRefurbished = product.badge?.type === 'refurbished';
        if (selectedCondition === 'Brand New' && !isNew) return;
        if (selectedCondition === 'Certified Refurbished' && !isRefurbished) return;
      }
      
      ALL_GLOBAL_BRANDS.forEach(brand => {
        if (doesProductMatchBrand(product, brand as string)) {
          brands.add(brand as string);
        }
      });
    });
    return brands;
  };

  const getAvailableConditions = () => {
    const conds = new Set<string>();
    categoryProducts.forEach(product => {
      const priceValue = parsePrice(product.currentPrice);
      if (priceValue > priceRange) return;
      
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(b => doesProductMatchBrand(product, b));
      if (!matchesBrand) return;
      
      if (product.badge?.type === 'new') conds.add('Brand New');
      if (product.badge?.type === 'refurbished') conds.add('Certified Refurbished');
    });
    return conds;
  };

  const availableBrands = getAvailableBrands();
  const availableConditions = getAvailableConditions();
  
  // Create a pseudo set for the category so the sidebar doesn't hide it entirely (optional, but keeps UI consistent)
  const availableCategories = new Set([categorySlug]);

  // Reset page when sorting or filtering changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, productsPerPage, priceRange, selectedBrands, selectedCondition]);

  const clearFilters = () => {
    setPriceRange(25000);
    setSelectedBrands([]);
    setSelectedCondition('');
  };

  const filteredProducts = categoryProducts.filter((product) => {
    const price = parsePrice(product.currentPrice);
    const matchesPrice = price <= priceRange;

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some(brand => doesProductMatchBrand(product, brand));

    let matchesCondition = true;
    if (selectedCondition) {
      const isNew = product.badge?.type === 'new';
      const isRefurbished = product.badge?.type === 'condition grade-a'; 
      
      if (selectedCondition === 'Brand New') {
        matchesCondition = isNew;
      } else if (selectedCondition === 'Certified Refurbished') {
        matchesCondition = isRefurbished;
      }
    }

    return matchesPrice && matchesBrand && matchesCondition;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return parsePrice(a.currentPrice) - parsePrice(b.currentPrice);
      case 'Price: High to Low':
        return parsePrice(b.currentPrice) - parsePrice(a.currentPrice);
      case 'Newest Arrivals':
        return b.id - a.id;
      case 'Best Reviews':
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const displayStart = totalProducts === 0 ? 0 : indexOfFirstProduct + 1;
  const displayEnd = Math.min(indexOfLastProduct, totalProducts);

  return (
    <main className="shop-layout">
      {isMobileFiltersOpen && (
        <div 
          className="mobile-filters-overlay" 
          onClick={() => setIsMobileFiltersOpen(false)}
        />
      )}

      <div className="shop-main">
        {/* Sidebar Filters */}
        <SidebarFilters
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedCategories={selectedCategories}
          setSelectedCategories={() => {}} // Disabled for category pages
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          clearFilters={clearFilters}
          isOpen={isMobileFiltersOpen}
          setIsOpen={setIsMobileFiltersOpen}
          availableBrands={availableBrands}
          availableCategories={availableCategories}
          availableConditions={availableConditions}
        />

        {/* Product Grid Area */}
        <section className="shop-content">
          <div className="shop-breadcrumbs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
             <div>
               <Link href="/">Home</Link> &gt; <span>{categoryName}</span>
             </div>
             <div>
                <h1 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{categoryName}</h1>
             </div>
          </div>

          <ShopHeaderActions 
            displayStart={displayStart}
            displayEnd={displayEnd}
            totalProducts={totalProducts}
            productsPerPage={productsPerPage}
            setProductsPerPage={setProductsPerPage}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewType={viewType}
            setViewType={setViewType}
            setIsMobileFiltersOpen={setIsMobileFiltersOpen}
          />

          <ProductGrid 
            products={currentProducts}
            viewType={viewType}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
    </main>
  );
}
