import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link className={styles.link} to="/Posts">
        Posts
      </Link>
      <Link className={styles.link} to="/Albums">
        Albums
      </Link>
      <Link className={styles.link} to="/Todos">
        Todos
      </Link>
    </header>
  );
};
