import store from 'store';
import { useSetRecoilState } from 'recoil';

import { login } from '../utils/login';
import { IAdmin } from 'types/admin';
import { loginState } from '../states/login';
import { LOGIN_DB_KEY } from '../constant/key';

export const useLogin = () => {
  const setLoginValue = useSetRecoilState(loginState);
  return (name: string, password: string, failHandler: (message: string) => void) => {
    const isLoginResult: IAdmin = login(name, password);
    if (isLoginResult.message !== '로그인 성공!') {
      failHandler(isLoginResult.message);
    } else {
      setLoginValue((prev) => {
        return {
          ...prev,
          isLoggedIn: true,
          payload: {
            id: isLoginResult.id,
            name: isLoginResult.name,
          },
        };
      });
      store.set(LOGIN_DB_KEY, {
        isLoggedIn: true,
        payload: {
          id: isLoginResult.id,
          name: isLoginResult.name,
        },
      });
    }
  };
};
