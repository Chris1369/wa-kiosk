import CategoryList from './CategoryList';
import Footer from './Footer';
import ProductList from './ProductList';
import styles from './style.module.css';

export default function Body() {
  return (
    <>
      <div className={styles.body}>
        <CategoryList />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}
