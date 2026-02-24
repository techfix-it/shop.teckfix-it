import React from 'react';

interface CategoryFilterProps {
  categories: { label: string; value: string }[];
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
}

export default function CategoryFilter({ categories, selectedCategories, toggleCategory }: CategoryFilterProps) {
  return (
    <div className="filter-section">
      <h3 className="filter-title">CATEGORY</h3>
      <div className="filter-list">
        {categories.map(cat => (
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
  );
}
