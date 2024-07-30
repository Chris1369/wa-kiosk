import { Typography } from '@mui/material';
import { useCartStore } from '../../../../stores/useCartStore';

export default function TotalCart() {
  //
  const cart = useCartStore((state) => state.cart);
  if (!cart.length) return null;

  return (
    <Typography
      variant='h5'
      component='h5'
      align='center'
      color='black'
      fontWeight='bold'
    >
      Total: {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)} €
    </Typography>
  );
}
