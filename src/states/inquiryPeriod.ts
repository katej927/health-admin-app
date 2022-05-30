import { atom } from 'recoil';

export interface IInquiryPeriodState {
  startDate: string;
  endDate: string;
}

export const inquiryPeriodMemberState = atom<IInquiryPeriodState>({
  key: '#inquiryPeriodMemberState',
  default: { startDate: '', endDate: '' },
});

export const inquiryPeriodHeartState = atom<IInquiryPeriodState>({
  key: '#inquiryPeriodHeartState',
  default: { startDate: '', endDate: '' },
});

export const inquiryPeriodStepState = atom<IInquiryPeriodState>({
  key: '#inquiryPeriodStepState',
  default: { startDate: '', endDate: '' },
});

export const todayState = atom({
  key: '#todayState',
  default: '2022-04-19',
});
