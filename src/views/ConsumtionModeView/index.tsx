import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import styles from './style.module.css';

export default function ConsumtionModeView() {
  //
  const navigate = useNavigate();

  const handleSelectConsumptionMode = (type: number) => {
    navigate('/enter-your-name-name?consumptionMode=' + type);
  };

  return (
    <div className={styles.container}>
      <div>
        <Typography variant='h2' component='h2' align='center'>
          Selectionnez votre
        </Typography>
        <Typography variant='h2' component='h2' align='center'>
          mode de consommation
        </Typography>
      </div>

      <div className={styles.buttons}>
        <Button
          size='large'
          variant='contained'
          onClick={() => handleSelectConsumptionMode(1)}
          style={{
            backgroundColor: '#F45F5D',
            color: '#fff',
          }}
        >
          <LocalDiningIcon fontSize='large' />
          SUR PLACE
        </Button>
        <Button
          size='large'
          variant='contained'
          onClick={() => handleSelectConsumptionMode(2)}
          style={{
            backgroundColor: '#F45F5D',
            color: '#fff',
          }}
        >
          <LocalMallIcon fontSize='large' />Á EMPORTER
        </Button>
      </div>
    </div>
  );
}
