import styles from './style.module.css';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt='logo io' />
    </div>
  );
}
