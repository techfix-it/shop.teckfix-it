import React from 'react';

interface ConditionFilterProps {
  selectedCondition: string;
  setSelectedCondition: (val: string) => void;
  availableConditions: Set<string>;
}

export default function ConditionFilter({ selectedCondition, setSelectedCondition, availableConditions }: ConditionFilterProps) {
  return (
    <div className="filter-section">
      <h3 className="filter-title">CONDITION</h3>
      <div className="filter-list">
        {['Brand New', 'Certified Refurbished'].map(condition => {
          const isSelected = selectedCondition === condition;
          const isAvailable = availableConditions.has(condition);
          const isDisabled = !isSelected && !isAvailable;

          return (
            <label key={condition} className={`filter-item ${isDisabled ? 'disabled' : ''}`}>
              <input 
                className="filter-checkbox" 
                type="checkbox" 
                checked={isSelected}
                disabled={isDisabled}
                onChange={() => !isDisabled && setSelectedCondition(selectedCondition === condition ? '' : condition)}
              />
              <span className="filter-label">{condition}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
