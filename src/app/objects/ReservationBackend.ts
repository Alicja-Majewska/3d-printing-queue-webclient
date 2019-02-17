import {UserBackend} from './UserBackend';

export interface ReservationBackend {
  id: string;
  name: string;
  duration: number;
  startDate: string;
  stopDate: string;
  type: string;
  user: UserBackend;
  technicalBreak: number;
}
