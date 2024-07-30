import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/logo.png';

export default function HomeView() {
  //
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/consumption');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={logo} alt='' />
        <Typography variant='h1' component='h2'>
          Bienvenue au
        </Typography>
        <Typography variant='h2' component='h2'>
          IO Cofee
        </Typography>
      </div>
      <Button
        size='large'
        variant='contained'
        style={{
          backgroundColor: '#F45F5D',
          color: '#fff',
        }}
        onClick={handleOrder}
      >
        JE COMMANDE
      </Button>
    </div>
  );
}
