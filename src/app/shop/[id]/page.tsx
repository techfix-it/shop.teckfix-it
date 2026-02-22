import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailClient from '@/app/shop/[id]/ProductDetailClient';
import mockProducts from '@/app/api/test/mock/mock_products.json';
import { notFound } from 'next/navigation';
import './ProductDetail.css';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = mockProducts.find(p => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail-layout">
      <Header />
      <main className="product-detail-main">
        <ProductDetailClient product={product} allProducts={mockProducts} />
      </main>
      <Footer />
    </div>
  );
}
