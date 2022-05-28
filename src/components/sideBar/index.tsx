import { MainLogo } from 'assets/svgs';
import styles from './sideBar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.sideBarWrapper}>
      <section>
        <div>
          <MainLogo />
          <div className={styles.underLine} />
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
