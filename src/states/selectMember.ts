import { atom } from 'recoil';

export interface IMember {
  id: number;
  username: string;
  crt_ymdt: string;
}

export const selectMemberState = atom<IMember>({
  key: '#selectMemberState',
  default: {
    id: 0,
    username: '',
    crt_ymdt: '',
  },
});
