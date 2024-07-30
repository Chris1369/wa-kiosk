import { Typography } from '@mui/material';
import styles from './style.module.css';
import FailedAnimation from '../../components/lotties/FailedAnimation';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function IsFailed() {
  //
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/order-payment-method-choice');
    }, 5000);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div>
        <Typography variant='h2' component='h2' align='center'>
          Oups
        </Typography>
        <Typography variant='h3' component='h3' align='center'>
          quelque chose s'est mal passé
        </Typography>
        <Typography variant='h2' component='h2' align='center'></Typography>
      </div>
      <FailedAnimation />
    </div>
  );
}
