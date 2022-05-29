import store from 'store';

import { IAdmin } from 'types/admin';
import { ADMIN_LIST_DB_KEY } from '../constant/key';

const findAdmin = (name: string): IAdmin => {
  const adminList: IAdmin[] = store.get(ADMIN_LIST_DB_KEY);
  const admin = adminList.filter((dbAdmin) => dbAdmin.name === name);
  return admin.length === 0 ? ({ message: '유저가 존재하지 않습니다.' } as IAdmin) : admin[0];
};

const checkPassword = (password: string, dbPassword: string): boolean => {
  return password === dbPassword;
};

export const login = (name: string, password: string): IAdmin => {
  const admin = findAdmin(name);
  if (!admin.id) return admin;
  const isValid = checkPassword(password, admin.password);
  if (!isValid) return { message: '비밀번호가 일치하지 않습니다.' } as IAdmin;
  admin.message = '로그인 성공!';
  return admin;
};
