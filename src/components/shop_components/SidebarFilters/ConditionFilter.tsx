import React from 'react';

interface ConditionFilterProps {
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
}

export default function ConditionFilter({ selectedCondition, setSelectedCondition }: ConditionFilterProps) {
  return (
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
  );
}
