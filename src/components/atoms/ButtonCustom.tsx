/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';

export default function ButtonCustom({
  label,
  isDisabled,
  onClick,
  Icon,
}: {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
  Icon?: any;
}) {
  //

  return (
    <Button
      disabled={isDisabled}
      size='large'
      variant='contained'
      onClick={onClick}
      style={{
        backgroundColor: '#F45F5D',
        color: '#fff',
        opacity: isDisabled ? 0.5 : 1,
        width: 200,
        height: 100,
      }}
    >
      {Icon && <Icon fontSize='large' />}
      {label}
    </Button>
  );
}
