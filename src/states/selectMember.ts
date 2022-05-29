import { atom } from 'recoil';

export interface IMember {
  id: Number;
  username: String;
  crt_ymdt: String;
}

export const selectMemberState = atom<IMember>({
  key: '#selectMemberState',
  default: {
    id: 0,
    username: '',
    crt_ymdt: '',
  },
});
