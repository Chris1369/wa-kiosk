import { useCartStore } from '../../../../stores/useCartStore';
import styles from './style.module.css';

export default function PaymentButtonCounter() {
  //
  const cart = useCartStore((state) => state.cart);
  if (!cart.length) return null;

  return <div className={styles.cartCounter}>{cart.length}</div>;
}
