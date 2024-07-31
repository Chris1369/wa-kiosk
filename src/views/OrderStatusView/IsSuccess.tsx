import { Typography } from '@mui/material';
import styles from './style.module.css';
import SuccessAnimation from '../../components/lotties/SuccessAnimation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../stores/useCartStore';

export default function IsSuccess() {
  //
  const navigate = useNavigate();

  useEffect(() => {
    resetCart();
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div>
        <Typography variant='h2' component='h2' align='center'>
          Commande validée
        </Typography>
        <Typography variant='h3' component='h3' align='center'>
          Votre numero de commande est
        </Typography>
        <Typography variant='h2' component='h2' align='center'>
          B013
        </Typography>
      </div>
      <SuccessAnimation />
    </div>
  );
}
