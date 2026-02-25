import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryClient from '@/components/categories_page/CategoryClient';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.category || '';
  
  if (!slug) return null;

  // Map slugs to friendly display names based on mock_categorias.json
  const slugToNameMap: Record<string, string> = {
    'laptops': 'Laptops',
    'smartphones': 'Smartphones',
    'tablets': 'Tablets',
    'smartwatches': 'Smartwatches',
    'workstations': 'Workstations',
    'monitors': 'Monitors',
    'gaming-pcs': 'Custom Gaming PCs',
    'pcs': 'PCs',
    'processors-cpu': 'Processors (CPU)',
    'graphics-cards-gpu': 'Graphics Cards (GPU)',
    'motherboards': 'Motherboards',
    'memory-ram': 'Memory (RAM)',
    'storage-hdds-ssds': 'Storage (HDDs & SSDs)',
    'power-supplies-psu': 'Power Supplies (PSU)',
    'cases-chassis': 'Cases & Chassis',
    'cooling-solutions': 'Cooling Solutions',
    'keyboards': 'Keyboards',
    'mice': 'Mice',
    'headsets': 'Headsets',
    'mousepads': 'Mousepads',
    'chairs-desks': 'Chairs & Desks',
    'routers': 'Routers',
    'switches': 'Switches',
    'network-cards-wireless': 'Network Cards (Wireless & Ethernet)',
    'access-points': 'Access Points',
    'cables-adapters': 'Cables & Adapters',
    'ups': 'Uninterruptible Power Supplies (UPS)'
  };

  const categoryName = slugToNameMap[slug] || (slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '));

  return (
    <>
      <Header />
      <CategoryClient categorySlug={slug} categoryName={categoryName} />
      <Footer />
    </>
  );
}
