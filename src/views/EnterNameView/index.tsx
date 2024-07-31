import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import styles from './style.module.css';
import ButtonCustom from '../../components/atoms/ButtonCustom';

export default function EnterNameView() {
  //
  const params = new URLSearchParams(window.location.search);
  const consumptionMode = params.get('consumptionMode');
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const isDisabled = name.length <= 2;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleValidate = () => {
    navigation(
      '/order?' + 'consumptionMode=' + consumptionMode + 'name=' + name
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <Typography variant='h2' component='h2' align='center'>
          Entrez votre nom
        </Typography>
      </div>

      <div className={styles.form}>
        <div>
          <TextField
            label='Votre petit nom'
            variant='outlined'
            onChange={handleChange}
            value={name}
            margin='normal'
          />
        </div>

        <ButtonCustom
          isDisabled={isDisabled}
          label='JE VALIDE'
          onClick={handleValidate}
          Icon={CheckIcon}
        />
      </div>
      <div />
    </div>
  );
}
