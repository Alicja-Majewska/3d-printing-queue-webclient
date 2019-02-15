import { Reservation } from '../objects/Reservation';
import { ReservationBackend } from '../objects/ReservationBackend';
import { User } from '../objects/User';
import { UserDataFactory } from './UserDataFactory';

export class ReservationDataFactory {

    static getOne(): ReservationBackend {
        return <ReservationBackend> {
            id: 1,
            name: "Pierwsze drukowanie",
            duration: 3,
            startDate: "17.02.2019 13:00",
            stopDate: "17.02.2019 16:30",
            type: "PRINTING",
            user: UserDataFactory.getOne(),
        }
    }
}