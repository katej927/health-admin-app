import { atom } from 'recoil';

export interface IInquiryPeriodState {
  startDate: string;
  endDate: string;
}

const inquiryPeriodState = atom<IInquiryPeriodState>({
  key: '#inquiryPeriodState',
  default: { startDate: '', endDate: '' },
});

export default inquiryPeriodState;
