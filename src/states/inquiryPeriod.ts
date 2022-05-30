import { atom } from 'recoil';

export interface IInquiryPeriodState {
  startDate: string;
  endDate: string;
}

export const inquiryPeriodState = atom<IInquiryPeriodState>({
  key: '#inquiryPeriodState',
  default: { startDate: '', endDate: '' },
});

export const todayState = atom({
  key: '#todayState',
  default: '2022-04-19',
});
