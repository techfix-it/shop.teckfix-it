import React from 'react';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  availableBrands: Set<string>;
}

export default function BrandFilter({ brands, selectedBrands, toggleBrand, availableBrands }: BrandFilterProps) {
  return (
    <div className="filter-section">
      <h3 className="filter-title">BRAND</h3>
      <div className="filter-list">
        {brands.map(brand => {
          const isSelected = selectedBrands.includes(brand);
          const isAvailable = availableBrands.has(brand);
          const isDisabled = !isSelected && !isAvailable;

          return (
            <label key={brand} className={`filter-item ${isDisabled ? 'disabled' : ''}`}>
              <input 
                className="filter-checkbox" 
                type="checkbox" 
                checked={isSelected}
                disabled={isDisabled}
                onChange={() => !isDisabled && toggleBrand(brand)}
              />
              <span className="filter-label">{brand}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
