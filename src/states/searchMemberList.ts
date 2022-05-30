import { atom } from 'recoil';

interface IMemberInfo {
  id: number | string;
  username: string;
  crt_ymdt: object | string;
}

export const searchMemberList = atom<IMemberInfo[]>({
  key: '#searchMemberList',
  default: [],
});
