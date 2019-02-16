import { User } from './User';

export interface ReservationBackend {
    id: string;
    name: string;
    duration: number;
    startDate: string;
    stopDate: string;
    type: string;
    user: User;
    technicalBreak: number;
}
