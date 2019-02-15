import {ReservationBackend} from '../objects/ReservationBackend';
import {UserDataFactory} from './UserDataFactory';

export class ReservationDataFactory {

  static getOne(): ReservationBackend {
    return <ReservationBackend> {
      id: 1,
      name: "Pierwsze drukowanie",
      duration: 3,
      startDate: (new Date(2019, 02, 15, 15, 30)).toDateString(),
      stopDate: (new Date(2019, 02, 15, 15, 30)).toDateString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
    }
  }

  static getMany(): ReservationBackend[] {
    return [<ReservationBackend> {
      id: 1,
      name: "Drugie drukowanie",
      duration: 3,
      startData: (new Date(2019, 02, 15, 15, 30)).toDateString(),
      stopData: (new Date(2019, 02, 15, 19, 00)).toDateString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
    },
      <ReservationBackend> {
        id: 2,
        name: "Pierwsze drukowanie",
        duration: 1,
        startData: (new Date(2019, 02, 14, 14, 00)).toDateString(),
        stopData: (new Date(2019, 02, 14, 15, 30)).toDateString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
      },
      <ReservationBackend> {
        id: 3,
        name: "Pierwsze drukowanie",
        duration: 6,
        startData: (new Date(2019, 02, 12, 9, 00)).toDateString(),
        stopData: (new Date(2019, 02, 14, 15, 30)).toDateString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
      }
    ]
  }
}
