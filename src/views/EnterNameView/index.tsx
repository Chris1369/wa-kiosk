import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import styles from './style.module.css';

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

      <div>
        <TextField
          label='Votre petit nom'
          variant='outlined'
          onChange={handleChange}
          value={name}
        />
        <Button
          disabled={isDisabled}
          size='large'
          variant='contained'
          onClick={handleValidate}
          style={{
            backgroundColor: '#F45F5D',
            color: '#fff',
            opacity: isDisabled ? 0.5 : 1,
          }}
        >
          <CheckIcon fontSize='large' />
          JE VALIDE
        </Button>
      </div>
      <div />
    </div>
  );
}
