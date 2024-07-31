import { Suspense } from 'react';
import Body from './Body';
import Header from './Header';
import styles from './style.module.css';
import LoadingAnimation from '../../components/lotties/LoadingAnimation';

export default function OrderView() {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<LoadingAnimation />}>
        <Body />
      </Suspense>
    </div>
  );
}
