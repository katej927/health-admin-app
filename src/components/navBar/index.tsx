import styles from './navBar.module.scss';
import { useLogout } from '../../hooks/useLogout';

const NavBar = () => {
  const onLogout = useLogout();
  return (
    <header className={styles.headerWrapper}>
      <button type='button' onClick={onLogout}>
        로그아웃
      </button>
    </header>
  );
};

export default NavBar;
