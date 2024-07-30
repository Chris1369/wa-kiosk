import Lottie from 'lottie-react';
import lottieData from './data.json';

export default function SuccessAnimation() {
  return (
    <Lottie
      animationData={lottieData}
      style={{
        height: 200,
        width: 200,
      }}
    />
  );
}