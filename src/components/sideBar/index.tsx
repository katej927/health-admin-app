import cx from 'classnames';
import store from 'store';
import { FaHome } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { LOGIN_DB_KEY } from 'constant/key';
import { ILoginState } from 'types/admin';
import { LogoutIcon, UserInfoIcon } from 'assets/svgs';

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
      </div>
      <button type='button' className={styles.logout} onClick={onLogout}>
        <LogoutIcon />
        로그아웃
      </button>
    </aside>
  );
};

export default SideBar;
