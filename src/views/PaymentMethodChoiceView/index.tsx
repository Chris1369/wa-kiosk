import { Typography } from '@mui/material';
import styles from './style.module.css';
import PaymentMethodItem from './PaymentMethodItem';

export default function PaymentMethodChoiceView() {
  return (
    <div className={styles.container}>
      <Typography variant='h1' component='h2' align='center'>
        Vous réglez comment ?
      </Typography>
      <div className={styles.paymentMethods}>
        <PaymentMethodItem method='COUNTER' />
        <PaymentMethodItem method='CREDIT_CARD' />
      </div>
    </div>
  );
}
