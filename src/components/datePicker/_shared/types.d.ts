import { inquiryPeriodMemberState, inquiryPeriodHeartState, inquiryPeriodStepState } from 'states';

export type TStates = typeof inquiryPeriodHeartState | typeof inquiryPeriodMemberState | typeof inquiryPeriodStepState;

export type TPage = '회원 관리' | '회원 상세 정보';

export interface IMemberData {
  id: number;
  username: string;
  crt_ymdt: string;
}
