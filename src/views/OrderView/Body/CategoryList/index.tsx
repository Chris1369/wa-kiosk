import { CATEGORIES } from '../../../../assets/data';
import styles from './style.module.css';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
  return (
    <div className={styles.categoryList}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
