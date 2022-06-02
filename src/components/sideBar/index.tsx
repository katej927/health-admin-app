import cx from 'classnames';
import store from 'store';
import { NavLink } from 'react-router-dom';
import { LOGIN_DB_KEY } from 'constant/key';
import { ILoginState } from 'types/admin';
import { LogoutIcon, UserInfoIcon, FaHome, BsPersonFill } from 'assets/svgs';

import styles from './sideBar.module.scss';
import { useLogout } from 'hooks/useLogout';

const SideBar = () => {
  const loginUser: ILoginState = store.get(LOGIN_DB_KEY) ?? ({ isLoggedIn: false } as ILoginState);
  const onLogout = useLogout();
  return (
    <aside className={styles.sideBarWrapper}>
      <div className={styles.upperWrapper}>
        <div className={styles.userInfo}>
          <UserInfoIcon />
          <div className={styles.userName}>
            <p>{loginUser.isLoggedIn && loginUser.payload.name} 님</p>
            <p>MOADATA Company</p>
          </div>
        </div>
        <div className={styles.box}>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <FaHome />
                <p>백오피스 홈</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='manageMember' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <BsPersonFill />
                <p>회원 관리</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <button type='button' className={styles.logout} onClick={onLogout}>
        <LogoutIcon />
        <p>로그아웃</p>
      </button>
    </aside>
  );
};

export default SideBar;
