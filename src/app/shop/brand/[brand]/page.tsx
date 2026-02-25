import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandClient from '@/components/brands_page/BrandClient';

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.brand || '';
  
  if (!slug) return null;

  // Handle slug conversion, e.g. "apple" -> "Apple", "lenovo" -> "Lenovo", "microsoft" -> "Microsoft"
  let brandName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  if (slug.toLowerCase() === 'hp') brandName = 'HP';
  if (slug.toLowerCase() === 'logitech-g') brandName = 'Logitech G';

  return (
    <>
      <Header />
      <BrandClient brandName={brandName} />
      <Footer />
    </>
  );
}
