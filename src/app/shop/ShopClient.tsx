'use client';

import { useState, useEffect } from 'react';
import './shop.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopHeaderActions from '@/components/shop_components/ShopHeaderActions';
import ProductGrid from '@/components/shop_components/ProductGrid';
import SidebarFilters from '@/components/shop_components/SidebarFilters';
import mockProducts from '@/app/api/test/mock/mock_products.json';

export default function ShopClient() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Price: Low to High');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(24);
  // Filter States
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Reset page when sorting changes
  // Reset page when sorting or filtering changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, productsPerPage, priceRange, selectedCategories, selectedCondition, selectedBrands]);

  const clearFilters = () => {
    setPriceRange(5000);
    setSelectedCategories([]);
    setSelectedCondition('');
    setSelectedBrands([]);
  };

  const parsePrice = (priceStr: string) => {
    // Remove currency symbol and comma separators, then parse to float
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ''));
  };

  const filteredProducts = mockProducts.filter((product) => {
    const priceValue = parsePrice(product.price);
    if (priceValue > priceRange) return false;

    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;

    if (selectedCondition) {
      const isNew = product.badge?.type === 'new';
      const isRefurbished = product.badge?.type === 'refurbished';
      if (selectedCondition === 'Brand New' && !isNew) return false;
      if (selectedCondition === 'Certified Refurbished' && !isRefurbished) return false;
    }

    if (selectedBrands.length > 0) {
      const titleLower = product.title.toLowerCase();
      const matchBrand = selectedBrands.some(brand => {
        if (brand === 'Intel' && titleLower.includes('intel')) return true;
        if (brand === 'NVIDIA' && (titleLower.includes('nvidia') || titleLower.includes('geforce') || titleLower.includes('rtx'))) return true;
        if (brand === 'Apple' && (titleLower.includes('apple') || titleLower.includes('macbook') || titleLower.includes('ipad'))) return true;
        if (brand === 'Ubiquiti' && (titleLower.includes('ubiquiti') || titleLower.includes('unifi'))) return true;
        if (brand === 'Dell' && (titleLower.includes('dell') || titleLower.includes('alienware'))) return true;
        return false;
      });
      if (!matchBrand) return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'Price: High to Low':
        return parsePrice(b.price) - parsePrice(a.price);
      case 'Newest Arrivals':
        return b.id - a.id; // Assuming higher ID means newer
      case 'Best Reviews':
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Calculate pagination
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Safely display range
  const displayStart = totalProducts === 0 ? 0 : indexOfFirstProduct + 1;
  const displayEnd = Math.min(indexOfLastProduct, totalProducts);

  return (
    <main className="shop-layout">
      {/* Mobile Filters Overlay */}
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
          setSelectedCategories={setSelectedCategories}
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          clearFilters={clearFilters}
          isOpen={isMobileFiltersOpen}
          setIsOpen={setIsMobileFiltersOpen}
        />

        {/* Product Grid Area */}
        <section className="shop-content">
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
