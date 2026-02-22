import { LayoutGrid, List, Filter } from 'lucide-react';
import './ShopHeaderActions.css';

interface ShopHeaderActionsProps {
  displayStart: number;
  displayEnd: number;
  totalProducts: number;
  productsPerPage: number;
  setProductsPerPage: (val: number) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  viewType: 'grid' | 'list';
  setViewType: (val: 'grid' | 'list') => void;
  setIsMobileFiltersOpen: (val: boolean) => void;
}

export default function ShopHeaderActions({
  displayStart,
  displayEnd,
  totalProducts,
  productsPerPage,
  setProductsPerPage,
  sortBy,
  setSortBy,
  viewType,
  setViewType,
  setIsMobileFiltersOpen
}: ShopHeaderActionsProps) {
  return (
    <div className="shop-header-actions">
      <div className="results-count">
        Showing <strong>{displayStart}-{displayEnd}</strong> of <strong>{totalProducts}</strong> products
      </div>
      
      <div className="sort-container">
        <button 
          className="btn-mobile-filter"
          onClick={() => setIsMobileFiltersOpen(true)}
          aria-label="Open Filters"
        >
          <Filter size={20} />
        </button>

        <span className="sort-label hide-on-mobile">Show:</span>
        <select 
          className="sort-select"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))}
        >
          <option value={24}>24</option>
          <option value={36}>36</option>
          <option value={72}>72</option>
          <option value={144}>144</option>
        </select>
        <div className="sort-divider"></div>
        
        <span className="sort-label hide-on-mobile">Sort by:</span>
        <select 
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Newest Arrivals">Newest Arrivals</option>
          <option value="Best Reviews">Best Reviews</option>
        </select>
        <div className="sort-divider"></div>
        <div className="view-toggles">
          <button 
            className={`view-toggle-btn ${viewType === 'grid' ? 'active' : ''}`}
            onClick={() => setViewType('grid')}
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </button>
          <button 
            className={`view-toggle-btn ${viewType === 'list' ? 'active' : ''}`}
            onClick={() => setViewType('list')}
            aria-label="List view"
          >
            <List size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
