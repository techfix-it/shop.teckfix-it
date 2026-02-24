import React from 'react';

interface PriceRangeFilterProps {
  priceRange: number;
  setPriceRange: (val: number) => void;
}

export default function PriceRangeFilter({ priceRange, setPriceRange }: PriceRangeFilterProps) {
  // Calculate percentage for slider fill
  const maxPrice = 5000;
  const sliderPercentage = (priceRange / maxPrice) * 100;

  return (
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
  );
}
