import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/logo.png';
import ButtonCustom from '../../components/atoms/ButtonCustom';

export default function HomeView() {
  //
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/consumption');
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt='' />
        <Typography variant='h1' component='h2' align='center'>
          Bienvenue au
        </Typography>
        <Typography variant='h2' component='h2' align='center'>
          IO Cofee
        </Typography>
      </div>
      <ButtonCustom label='JE COMMANDE' onClick={handleOrder} />
    </div>
  );
}
