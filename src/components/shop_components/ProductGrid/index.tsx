import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProduct, { Product } from '../CardProduct';
import './ProductGrid.css';



interface ProductGridProps {
  products: Product[];
  viewType: 'grid' | 'list';
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export default function ProductGrid({ 
  products, 
  viewType,
  currentPage,
  totalPages,
  setCurrentPage
}: ProductGridProps) {
  return (
    <>
      <div className={`products-grid mock-grid ${viewType === 'list' ? 'list-view' : ''}`}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page} 
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button 
            className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}
