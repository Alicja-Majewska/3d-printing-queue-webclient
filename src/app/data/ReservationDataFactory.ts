import {ReservationBackend} from '../objects/ReservationBackend';
import {UserDataFactory} from './UserDataFactory';

export class ReservationDataFactory {

  static getOne(): ReservationBackend {
    return <ReservationBackend> {
      id: 1,
      name: "Pierwsze drukowanie",
      duration: 3,
      startDate: new Date('2019-02-15T13:30:00').toDateString(),
      stopDate: new Date('2019-02-15T16:30:00').toDateString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
    }
  }


  static getMany(): ReservationBackend[] {
    return [<ReservationBackend> {
      id: 1,
      name: "Drugie drukowanie",
      duration: 3,
      startDate: new Date('2019-02-15T13:30:00').toDateString(),
      stopDate: new Date('2019-02-15T16:30:00').toDateString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
    },
      <ReservationBackend> {
        id: 2,
        name: "Pierwsze drukowanie",
        duration: 1,
        startDate: new Date('2019-02-14T14:30:00').toDateString(),
        stopDate: new Date('2019-02-14T16:00:00').toDateString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
      },
      <ReservationBackend> {
        id: 3,
        name: "Pierwsze drukowanie",
        duration: 6,
        startDate: new Date('2019-02-12T09:30:00').toDateString(),
        stopDate: new Date('2019-02-12T16:00:00').toDateString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
      }
    ]
  }
}
