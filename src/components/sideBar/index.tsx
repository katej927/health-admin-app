import cx from 'classnames';
import { FaHome } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
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
        <div className={styles.box}>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <FaHome />
                백오피스 홈
              </NavLink>
            </li>
            <li>
              <NavLink to='manageMember' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <BsPersonFill />
                회원 관리
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
