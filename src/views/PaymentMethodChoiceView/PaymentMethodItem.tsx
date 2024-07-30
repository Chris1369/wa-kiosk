import { Typography } from '@mui/material';
import styles from './style.module.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethodItem({
  method,
}: {
  method: 'CREDIT_CARD' | 'COUNTER';
}) {
  //
  const navigate = useNavigate();

  const handleClick = () => {
    if (method === 'CREDIT_CARD') {
      navigate('/payment-credit-card');
    } else {
      navigate('/order-status?isSuccess=true');
    }
  };

  return (
    <div className={styles.paymentMethodItem} onClick={handleClick}>
      {method === 'CREDIT_CARD' ? (
        <CreditCardIcon fontSize='large' />
      ) : (
        <Person2Icon fontSize='large' />
      )}
      <Typography variant='h6' component='p'>
        {method === 'CREDIT_CARD' ? 'CB' : 'AU COMPTOIR'}
      </Typography>
    </div>
  );
}
