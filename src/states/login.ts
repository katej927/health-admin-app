import { atom } from 'recoil';

interface ILoginState {
  isLoggedIn: boolean;
  payload: {
    id: number | null;
  };
}

const LOGIN_ID = 'loginId';

const currentId = localStorage.getItem(LOGIN_ID);

export const loginState = atom<ILoginState>({
  key: '#loginState',
  default: {
    isLoggedIn: Boolean(currentId),
    payload: {
      id: currentId ? Number(currentId) : null,
    },
  },
});
