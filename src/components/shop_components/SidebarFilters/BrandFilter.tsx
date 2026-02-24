import React from 'react';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
}

export default function BrandFilter({ brands, selectedBrands, toggleBrand }: BrandFilterProps) {
  return (
    <div className="filter-section">
      <h3 className="filter-title">BRAND</h3>
      <div className="filter-list">
        {brands.map(brand => (
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
  );
}
