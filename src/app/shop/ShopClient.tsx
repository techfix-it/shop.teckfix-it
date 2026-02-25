'use client';

import { useState, useEffect } from 'react';
import './shop.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopHeaderActions from '@/components/shop_components/ShopHeaderActions';
import ProductGrid from '@/components/shop_components/ProductGrid';
import SidebarFilters from '@/components/shop_components/SidebarFilters';
import mockProducts from '@/app/api/test/mock/mock_products.json';
import mockCategorias from '@/app/api/test/mock/mock_categorias.json';

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

  const parsePrice = (priceStr: string | undefined | null) => {
    if (!priceStr) return 0; // Se não houver preço, retorna 0 em vez de quebrar
    // Garante que é string e remove símbolos
    return parseFloat(String(priceStr).replace(/[^0-9.-]+/g, '')) || 0;
  };

  // Calculate available facets dynamically
  const getAvailableBrands = () => {
    const brands = new Set<string>();
    mockProducts.forEach(product => {
      const priceValue = parsePrice(product.currentPrice);
      if (priceValue > priceRange) return;
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category_slug)) return;
      if (selectedCondition) {
        const isNew = product.badge?.type === 'new';
        const isRefurbished = product.badge?.type === 'refurbished';
        if (selectedCondition === 'Brand New' && !isNew) return;
        if (selectedCondition === 'Certified Refurbished' && !isRefurbished) return;
      }
      brands.add(product.brand);
      ALL_GLOBAL_BRANDS.forEach(brand => {
        if (doesProductMatchBrand(product, brand)) {
          brands.add(brand);
        }
      });
    });
    return brands;
  };

  const getAvailableCategories = () => {
    const cats = new Set<string>();
    mockProducts.forEach(product => {
      const priceValue = parsePrice(product.currentPrice);
      if (priceValue > priceRange) return;
      if (selectedCondition) {
        const isNew = product.badge?.type === 'new';
        const isRefurbished = product.badge?.type === 'refurbished';
        if (selectedCondition === 'Brand New' && !isNew) return;
        if (selectedCondition === 'Certified Refurbished' && !isRefurbished) return;
      }
      if (selectedBrands.length > 0) {
        let match = false;
        selectedBrands.forEach(brand => {
          if (doesProductMatchBrand(product, brand)) match = true;
        });
        if (!match) return;
      }
      cats.add(product.category_slug);
    });
    return cats;
  };

  const getAvailableConditions = () => {
    const conds = new Set<string>();
    mockProducts.forEach(product => {
      const priceValue = parsePrice(product.currentPrice);
      if (priceValue > priceRange) return;
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category_slug)) return;
      if (selectedBrands.length > 0) {
        const matchBrand = selectedBrands.some(brand => doesProductMatchBrand(product, brand));
        if (!matchBrand) return;
      }
      if (product.badge?.type === 'new') conds.add('Brand New');
      if (product.badge?.type === 'refurbished') conds.add('Certified Refurbished');
    });
    return conds;
  };

  const availableBrands = getAvailableBrands();
  const availableCategories = getAvailableCategories();
  const availableConditions = getAvailableConditions();

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

  const filteredProducts = mockProducts.filter((product) => {
  // 1. Tratamento de Preço (Garante que não dá erro de replace)
  const price = parsePrice(product.currentPrice);

  // 2. Filtro de Preço
  const matchesPrice = price <= priceRange;

  // 3. Filtro de Categoria (Usando o slug do novo JSON)
  const matchesCategory =
    selectedCategories.length === 0 ||
    selectedCategories.includes(product.category_slug);

  // 4. Filtro de Marca (Verificação usando helper robusto com global_brands_session)
  const matchesBrand =
    selectedBrands.length === 0 || 
    selectedBrands.some(brand => doesProductMatchBrand(product, brand));

  // 5. Filtro de Condição (Mantendo sua lógica original adaptada ao novo JSON)
  let matchesCondition = true;
  if (selectedCondition) {
    const isNew = product.badge?.type === 'new';
    const isRefurbished = product.badge?.type === 'condition grade-a'; // ou 'refurbished' dependendo do seu JSON
    
    if (selectedCondition === 'Brand New') {
      matchesCondition = isNew;
    } else if (selectedCondition === 'Certified Refurbished') {
      matchesCondition = isRefurbished;
    }
  }

  // Retorna true apenas se passar em todos os filtros
  return matchesPrice && matchesCategory && matchesBrand && matchesCondition;
});

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return parsePrice(a.currentPrice) - parsePrice(b.currentPrice);
      case 'Price: High to Low':
        return parsePrice(b.currentPrice) - parsePrice(a.currentPrice);
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
          availableBrands={availableBrands}
          availableCategories={availableCategories}
          availableConditions={availableConditions}
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
