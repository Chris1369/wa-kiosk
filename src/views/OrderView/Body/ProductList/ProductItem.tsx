import { Typography } from '@mui/material';
import styles from './style.module.css';
import { ProductType } from '../../../../assets/data';
import { addToCart } from '../../../../stores/useCartStore';

export default function ProductItem({ product }: { product: ProductType }) {
  //
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      key={product.id}
      className={styles.productItem}
      onClick={handleAddToCart}
    >
      <img src={product.image} width={'90%'} />
      <Typography variant='h4' component='h4'>
        {product.name}
      </Typography>
      <Typography variant='h5' component='h5' color='#fc6b6b'>
        {product.price.toFixed(2)} €
      </Typography>
    </div>
  );
}
