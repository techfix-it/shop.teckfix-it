import React from 'react';

interface CategoryFilterProps {
  categoriesGrouped: { category: string; subcategories: { label: string; value: string }[] }[];
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
  availableCategories: Set<string>;
}

export default function CategoryFilter({ categoriesGrouped, selectedCategories, toggleCategory, availableCategories }: CategoryFilterProps) {
  return (
    <div className="filter-section">
      <h3 className="filter-title">CATEGORY</h3>
      <div className="filter-list">
        {categoriesGrouped.map((group) => {
          const hasVisibleItems = group.subcategories.some(cat => {
            const isSelected = selectedCategories.includes(cat.value);
            const isAvailable = availableCategories.has(cat.value);
            return isSelected || isAvailable;
          });

          if (!hasVisibleItems) return null;

          return (
            <div key={group.category} className="filter-group">
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-800)', margin: '0.5rem 0' }}>{group.category.toUpperCase()}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.subcategories.map(cat => {
                  const isSelected = selectedCategories.includes(cat.value);
                  const isAvailable = availableCategories.has(cat.value);
                  const isDisabled = !isSelected && !isAvailable;

                  return (
                    <label key={cat.value} className={`filter-item ${isDisabled ? 'disabled' : ''}`}>
                      <input 
                        className="filter-checkbox" 
                        type="checkbox" 
                        checked={isSelected}
                        disabled={isDisabled}
                        onChange={() => !isDisabled && toggleCategory(cat.value)}
                      />
                      <span className="filter-label">{cat.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
