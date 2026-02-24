import { Filter, X } from 'lucide-react';
import './SidebarFilters.css';
import PriceRangeFilter from './PriceRangeFilter';
import CategoryFilter from './CategoryFilter';
import ConditionFilter from './ConditionFilter';
import BrandFilter from './BrandFilter';

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
}

const CATEGORIES = [
  { label: 'Processors (CPUs)', value: 'PROCESSORS' },
  { label: 'Graphics Cards (GPUs)', value: 'GRAPHICS CARDS' },
  { label: 'Laptops & MacBooks', value: 'LAPTOPS' },
  { label: 'Networking Gear', value: 'NETWORKING' },
  { label: 'Servers', value: 'SERVERS' },
];

const BRANDS = ['Intel', 'NVIDIA', 'Apple', 'Ubiquiti', 'Dell'];

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
  setIsOpen
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
        categories={CATEGORIES} 
        selectedCategories={selectedCategories} 
        toggleCategory={toggleCategory} 
      />

      <div className="filter-divider"></div>

      <ConditionFilter 
        selectedCondition={selectedCondition} 
        setSelectedCondition={setSelectedCondition} 
      />

      <div className="filter-divider"></div>

      <BrandFilter 
        brands={BRANDS} 
        selectedBrands={selectedBrands} 
        toggleBrand={toggleBrand} 
      />

      <button className="btn-clear-filters" onClick={clearFilters}>Clear All Filters</button>
    </aside>
  );
}
