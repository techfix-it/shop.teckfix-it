import './shop.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Shop() {
  return (
    <>
      <Header />

      <main className="shop-layout">
        <div className="shop-main">
          {/* Sidebar Filters */}
          <aside className="shop-filters">
            <h2 className="filters-header">
              <span className="material-symbols-outlined">filter_alt</span>
              Filters
            </h2>
            
            <div className="filter-divider"></div>

            <div className="filter-section">
              <h3 className="filter-title">PRICE RANGE</h3>
              <div className="price-slider-mock">
                <div className="slider-track">
                  <div className="slider-fill"></div>
                  <div className="slider-handle"></div>
                </div>
                <div className="price-labels">
                  <span>€0</span>
                  <span>€5,000+</span>
                </div>
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-section">
              <h3 className="filter-title">CATEGORY</h3>
              <div className="filter-list">
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Processors (CPUs)</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Graphics Cards (GPUs)</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" defaultChecked />
                  <span className="filter-label">Laptops & MacBooks</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" defaultChecked />
                  <span className="filter-label">Networking Gear</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Servers</span>
                </label>
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-section">
              <h3 className="filter-title">CONDITION</h3>
              <div className="filter-list">
                <label className="filter-item">
                  <input className="filter-checkbox" type="radio" name="condition" />
                  <span className="filter-label">Brand New</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="radio" name="condition" defaultChecked />
                  <span className="filter-label">Certified Refurbished</span>
                </label>
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-section">
              <h3 className="filter-title">BRAND</h3>
              <div className="filter-list">
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Intel</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">NVIDIA</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Apple</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Ubiquiti</span>
                </label>
                <label className="filter-item">
                  <input className="filter-checkbox" type="checkbox" />
                  <span className="filter-label">Dell</span>
                </label>
              </div>
            </div>

            <button className="btn-clear-filters">Clear All Filters</button>

          </aside>

          {/* Product Grid Area */}
          <section className="shop-content">
            <div className="shop-header-actions">
              <div className="results-count">Showing <strong>12</strong> of <strong>156</strong> products</div>
              
              <div className="sort-container">
                <span className="sort-label">Sort by:</span>
                <select className="sort-select">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                  <option>Best Reviews</option>
                </select>
                <div className="view-toggles">
                  <button className="view-toggle-btn active"><span className="material-symbols-outlined">grid_view</span></button>
                  <button className="view-toggle-btn"><span className="material-symbols-outlined">view_list</span></button>
                </div>
              </div>
            </div>

            <div className="products-grid mock-grid">
              {/* Product 1 */}
              <div className="product-card">
                <span className="badge badge-new">NEW</span>
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=300&h=300" alt="CPU" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">PROCESSORS</span>
                  <h3 className="product-title">Intel Core i9-14900K Desktop Processor 24 Cores</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    <span className="rating-count">(42)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€649.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="product-card">
                <span className="badge badge-hot">HOT</span>
                <div className="product-image-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiM3qO6eN_HwQ9X8Gf2xJ6H5vGZ4A1YJj7-d95I0I_FzLp4xQ1j_D9X3G7N8tJz6F0Q9I_L1G6Tb5O6B_x7f_Icwq1HqQzJZz4L_0XU9O0xJY9J_5u3B_WkVZJ4XzYnO_uJv2RkTl_vUq0F_4bWq1N-eS07pE_lO3c4l3c" alt="Graphics Card" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">GRAPHICS CARDS</span>
                  <h3 className="product-title">ASUS TUF Gaming GeForce RTX 4080 SUPER 16GB</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(18)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€1,149.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="product-card">
                <span className="badge badge-refurbished">REFURBISHED</span>
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=300" alt="MacBook" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">LAPTOPS</span>
                  <h3 className="product-title">Apple MacBook Pro 16" (M3 Max, 64GB RAM, 2TB SSD)</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    <span className="rating-count">(25)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€3,299.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="product-card">
                <div className="product-image-container">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=300&h=300" alt="Networking" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">NETWORKING</span>
                  <h3 className="product-title">Ubiquiti UniFi Dream Machine Special Edition</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star_outline</span>
                    <span className="rating-count">(9)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€499.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Product 5 */}
               <div className="product-card">
                <div className="product-image-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Z6T4QzJw1JpZ5yN2vN8vF0_H9H7g6D4Q6B-D9M8Hk7F8Q9I_L1G6TbzJw5cO5-d-x7f_Icwq1HqQzJZz4L_0XU9O0xJY9J_5u3B_WkVZJ4XzYnO_uJv2RkTl_vUq0F_4bWq1N-eS07pE_lO3c4l3c" alt="Server" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">SERVERS</span>
                  <h3 className="product-title">Dell PowerEdge T150 Tower Server - Xeon E-2314</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    <span className="rating-count">(11)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€1,299.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Product 6 */}
               <div className="product-card">
                <span className="badge badge-promo">PROMO</span>
                <div className="product-image-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3lpNr5EsDc0u7b2mun74LJxzBGIL2q8zc_iHeZ6ZyCJvlZxm146APPwibmn71IJpAum-yE0yOzIuH-69xMedgVVJl4RqDQ8JObrukMONRFDfAyYVWb8UnBBjpoelGWtzHUR6nq8WgTwNqN4gXGSj4EQ5I4ddizoxLY7pS9dCBFQlhb71PqosgZsPv5A13P7Pu6b3RF9q9W_6R2a8VXLF8gF4tETvdrxKJX_pHikc-5wh8grFMkRILn2OrmKZV90ZAhtu6riYsf8g0" alt="SSD" className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-category">STORAGE</span>
                  <h3 className="product-title">Samsung 990 PRO NVMe M.2 SSD 2TB PCIe 4.0</h3>
                  <div className="product-rating">
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-count">(88)</span>
                  </div>
                  <div className="product-footer-clean">
                    <span className="current-price">€189.00</span>
                    <button className="btn-add-plus">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-btn disabled"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="page-ellipsis">...</span>
              <button className="page-btn">12</button>
              <button className="page-btn"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
