import store from 'store';
import { useSetRecoilState } from 'recoil';

import { loginState } from '../states/login';
import { LOGIN_DB_KEY } from '../constant/key';

export const useLogout = () => {
  const setLoginValue = useSetRecoilState(loginState);
  return () => {
    store.remove(LOGIN_DB_KEY);
    setLoginValue((prev) => {
      return {
        ...prev,
        isLoggedIn: false,
        payload: {
          id: null,
          name: '',
        },
      };
    });
  };
};
