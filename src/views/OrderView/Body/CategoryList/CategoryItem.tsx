import { Typography } from '@mui/material';
import styles from './style.module.css';
import { CategoryType } from '../../../../assets/data';

export default function CategoryItem({ category }: { category: CategoryType }) {
  return (
    <div key={category.id} className={styles.category}>
      <Typography variant='h5' component='h5'>
        {category.name}
      </Typography>
    </div>
  );
}
