import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PaymentButtonCounter from './PaymentButtonCounter';

export default function PaymentButton() {
  //
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate('/order-payment-method-choice');
  };

  return (
    <div>
      <Button
        size='large'
        variant='contained'
        style={{
          backgroundColor: '#F45F5D',
          color: '#fff',
        }}
        onClick={handleOrder}
      >
        <PaymentButtonCounter />
        PAYER
      </Button>
    </div>
  );
}
