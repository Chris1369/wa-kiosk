import Body from './Body';
import Header from './Header';
import styles from './style.module.css';

export default function OrderView() {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}
