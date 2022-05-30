import { atom } from 'recoil';
import { IMember } from 'types/member';

export const searchMemberList = atom<IMember[]>({
  key: '#searchMemberList',
  default: [],
});
