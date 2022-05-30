export type GraphType = 'dayGraph' | 'weeklyGraph';

export interface IStep {
  seq: number;
  member_seq: number;
  steps: number;
  minutes: number;
  distance: number;
  calorie: number;
  crt_ymdt: string;
}

export interface IStepData {
  id: number;
  stepData: IStep[];
}
