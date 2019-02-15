import { User } from './User';

export interface ReservationBackend {
    id: number;
    name: string;
    duration: number;
    startDate: string;
    stopDate: string;
    type: string;
    user: User;
}