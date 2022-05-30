import store from 'store';
import { atom } from 'recoil';

import { ILoginState } from 'types/admin';
import { LOGIN_DB_KEY } from '../constant/key';

const admin: ILoginState = store.get(LOGIN_DB_KEY);

export const loginState = atom<ILoginState>({
  key: '#loginState',
  default: {
    isLoggedIn: admin !== undefined,
    payload: {
      id: admin?.payload.id ?? null,
      name: admin?.payload.name ?? '',
    },
  },
});
