import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import styles from './style.module.css';
import ButtonCustom from '../../components/atoms/ButtonCustom';

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
        <ButtonCustom
          label=' SUR PLACE'
          onClick={() => handleSelectConsumptionMode(1)}
          Icon={LocalMallIcon}
        />
        <ButtonCustom
          label=' Á EMPORTER'
          onClick={() => handleSelectConsumptionMode(2)}
          Icon={LocalDiningIcon}
        />
      </div>
    </div>
  );
}
