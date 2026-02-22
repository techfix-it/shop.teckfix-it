import CardProduct, { Product } from '@/components/shop_components/CardProduct';
import './FrequentlyBoughtTogether.css';

interface FrequentlyBoughtTogetherProps {
  recommendedItems: Product[];
}

export default function FrequentlyBoughtTogether({ recommendedItems }: FrequentlyBoughtTogetherProps) {
  if (!recommendedItems || recommendedItems.length === 0) return null;

  return (
    <div className="frequently-bought-section">
      <h2 className="fbt-title">Frequently Bought Together</h2>
      <div className="fbt-grid">
        {recommendedItems.map(product => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
