import Lottie from 'lottie-react';
import lottieData from './data.json';

export default function LoadingAnimation() {
  return (
    <Lottie
      animationData={lottieData}
      style={{
        height: 100,
        width: 100,
      }}
    />
  );
}
