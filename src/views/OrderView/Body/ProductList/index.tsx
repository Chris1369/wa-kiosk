import { PRODUCTS } from '../../../../assets/data';
import styles from './style.module.css';
import ProductItem from './ProductItem';

export default function ProductList() {
  return (
    <div className={styles.productList}>
      {PRODUCTS.map((product, id) => (
        <ProductItem key={id} product={product} />
      ))}
    </div>
  );
}
