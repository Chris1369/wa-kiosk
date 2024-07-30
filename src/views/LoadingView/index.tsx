import LoadingAnimation from '../../components/lotties/LoadingAnimation';
import styles from './style.module.css';

export default function LoadingView() {
  return (
    <div className={styles.container}>
      <LoadingAnimation />
    </div>
  );
}
