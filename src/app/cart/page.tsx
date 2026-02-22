import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartClient from '@/app/cart/CartClient';
import mockProducts from '@/app/api/test/mock/mock_products.json';
import './Cart.css';

export default function CartPage() {
  // Pre-select some items for the mock cart
  const cartItems = [
    {
      ...mockProducts.find(p => p.id === 5), // MacBook
      quantity: 1,
      inStock: true,
      sku: 'MAC-PRO-16-M3'
    },
    {
      ...mockProducts.find(p => p.id === 13), // Sony Headphones
      quantity: 1,
      inStock: true,
      sku: 'SNY-WH-1000XM5'
    }
  ];

  // Some recommended items for the "Frequently Bought Together"
  const recommendedItems = mockProducts.slice(6, 10);

  return (
    <div className="cart-page-layout">
      <Header />
      <main className="cart-page-main">
        <CartClient 
          initialItems={cartItems} 
          recommendedItems={recommendedItems} 
        />
      </main>
      <Footer />
    </div>
  );
}
