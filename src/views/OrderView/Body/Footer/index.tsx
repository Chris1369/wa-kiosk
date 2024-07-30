import { Button } from '@mui/material';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import PaymentButton from './PaymentButton';
import { resetCart } from '../../../../stores/useCartStore';

export default function Footer() {
  //
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
    resetCart();
  };

  return (
    <div className={styles.footer}>
      <Button
        size='large'
        variant='contained'
        style={{
          backgroundColor: '#F45F5D',
          color: '#fff',
        }}
        onClick={handleCancel}
      >
        ANNULER
      </Button>
      <PaymentButton />
    </div>
  );
}
