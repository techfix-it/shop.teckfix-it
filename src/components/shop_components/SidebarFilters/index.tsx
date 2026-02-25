import { Filter, X } from 'lucide-react';
import './SidebarFilters.css';
import PriceRangeFilter from './PriceRangeFilter';
import CategoryFilter from './CategoryFilter';
import ConditionFilter from './ConditionFilter';
import BrandFilter from './BrandFilter';
import mockCategorias from '@/app/api/test/mock/mock_categorias.json';
import mockProducts from '@/app/api/test/mock/mock_products.json';

interface SidebarFiltersProps {
  priceRange: number;
  setPriceRange: (val: number) => void;
  selectedCategories: string[];
  setSelectedCategories: (val: string[] | ((prev: string[]) => string[])) => void;
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
  selectedBrands: string[];
  setSelectedBrands: (val: string[] | ((prev: string[]) => string[])) => void;
  clearFilters: () => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  availableBrands: Set<string>;
  availableCategories: Set<string>;
  availableConditions: Set<string>;
}

const CATEGORIES_GROUPED = mockCategorias.menu_categories.map(cat => ({
  category: cat.category,
  subcategories: cat.subcategories.map(sub => ({
    label: sub.name,
    value: sub.category_slug
  }))
}));

const GLOBAL_BRANDS = Array.from(new Set(
  Object.values(mockCategorias.global_brands_session).flat().map((b: any) => b.name)
));
const ALL_PRODUCT_BRANDS = Array.from(new Set(mockProducts.map(p => p.brand)));
const BRANDS = Array.from(new Set([...ALL_PRODUCT_BRANDS, ...GLOBAL_BRANDS])).sort();

export default function SidebarFilters({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedCondition,
  setSelectedCondition,
  selectedBrands,
  setSelectedBrands,
  clearFilters,
  isOpen,
  setIsOpen,
  availableBrands,
  availableCategories,
  availableConditions
}: SidebarFiltersProps) {

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <aside className={`shop-filters ${isOpen ? 'open' : ''}`}>
      <div className="filters-header-container">
        <h2 className="filters-header">
          <Filter size={24} color="#0c18ba" />
          Filters
        </h2>
        <button 
          className="btn-close-filters-mobile" 
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="filter-divider"></div>

      <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />

      <div className="filter-divider"></div>

      <CategoryFilter 
        categoriesGrouped={CATEGORIES_GROUPED} 
        selectedCategories={selectedCategories} 
        toggleCategory={toggleCategory} 
        availableCategories={availableCategories} 
      />

      <div className="filter-divider"></div>

      <BrandFilter 
        brands={BRANDS} 
        selectedBrands={selectedBrands} 
        toggleBrand={toggleBrand} 
        availableBrands={availableBrands} 
      />

      <div className="filter-divider"></div>

      <ConditionFilter 
        selectedCondition={selectedCondition} 
        setSelectedCondition={setSelectedCondition} 
        availableConditions={availableConditions} 
      />

    

      <button className="btn-clear-filters" onClick={clearFilters}>Clear All Filters</button>
    </aside>
  );
}
