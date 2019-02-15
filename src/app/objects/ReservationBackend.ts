import { User } from './User';

export interface ReservationBackend {
    id: number;
    name: string;
    duration: number;
    startData: string;
    stopData: string;
    type: string;
    user: User;
}