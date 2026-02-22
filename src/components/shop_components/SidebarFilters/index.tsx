import { Filter, X } from 'lucide-react';
import './SidebarFilters.css';

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

  // Calculate percentage for slider fill
  const maxPrice = 5000;
  const sliderPercentage = (priceRange / maxPrice) * 100;

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

      <div className="filter-section">
        <h3 className="filter-title">PRICE RANGE</h3>
        <div className="price-slider-mock">
          <input 
            type="range" 
            min="0" 
            max="5000" 
            step="50"
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="filter-range-input"
            style={{
              background: `linear-gradient(to right, #0c18ba 0%, #0c18ba ${sliderPercentage}%, var(--border-200) ${sliderPercentage}%, var(--border-200) 100%)`
            }}
          />
          <div className="price-labels">
            <span>€0</span>
            <span>€{priceRange >= 5000 ? '5,000+' : priceRange.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="filter-divider"></div>

      <div className="filter-section">
        <h3 className="filter-title">CATEGORY</h3>
        <div className="filter-list">
          {CATEGORIES.map(cat => (
            <label key={cat.value} className="filter-item">
              <input 
                className="filter-checkbox" 
                type="checkbox" 
                checked={selectedCategories.includes(cat.value)}
                onChange={() => toggleCategory(cat.value)}
              />
              <span className="filter-label">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-divider"></div>

      <div className="filter-section">
        <h3 className="filter-title">CONDITION</h3>
        <div className="filter-list">
          <label className="filter-item">
            <input 
              className="filter-checkbox" 
              type="checkbox" 
              checked={selectedCondition === 'Brand New'}
              onChange={() => setSelectedCondition(selectedCondition === 'Brand New' ? '' : 'Brand New')}
            />
            <span className="filter-label">Brand New</span>
          </label>
          <label className="filter-item">
            <input 
              className="filter-checkbox" 
              type="checkbox" 
              checked={selectedCondition === 'Certified Refurbished'}
              onChange={() => setSelectedCondition(selectedCondition === 'Certified Refurbished' ? '' : 'Certified Refurbished')}
            />
            <span className="filter-label">Certified Refurbished</span>
          </label>
        </div>
      </div>

      <div className="filter-divider"></div>

      <div className="filter-section">
        <h3 className="filter-title">BRAND</h3>
        <div className="filter-list">
          {BRANDS.map(brand => (
            <label key={brand} className="filter-item">
              <input 
                className="filter-checkbox" 
                type="checkbox" 
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              <span className="filter-label">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="btn-clear-filters" onClick={clearFilters}>Clear All Filters</button>
    </aside>
  );
}
