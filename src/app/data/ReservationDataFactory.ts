import {ReservationBackend} from '../objects/ReservationBackend';
import {UserDataFactory} from './UserDataFactory';

export class ReservationDataFactory {

  static getOne(): ReservationBackend {
    return <ReservationBackend> {
      id: '1',
      name: "Pierwsze drukowanie",
      duration: 3,
      startDate: new Date('2019-02-15T13:30:00').toISOString(),
      stopDate: new Date('2019-02-15T17:00:00').toISOString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
      technicalBreak: 15,
    }
  }

  static getMany(): ReservationBackend[] {
    return [<ReservationBackend> {
      id: '1',
      name: "Drugie drukowanie",
      duration: 3,
      startDate: new Date('2019-02-15T11:00:00').toISOString(),
      stopDate: new Date('2019-02-15T14:30:00').toISOString(),
      type: "PRINTING",
      user: UserDataFactory.getOne(),
      technicalBreak: 15
    },
      <ReservationBackend> {
        id: '2',
        name: "Pierwsze drukowanie",
        duration: 1,
        startDate: new Date('2019-02-14T14:30:00').toISOString(),
        stopDate: new Date('2019-02-14T16:00:00').toISOString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
        technicalBreak: 15,
      },
      <ReservationBackend> {
        id: '3',
        name: "Trzecie drukowanie",
        duration: 6,
        startDate: new Date('2019-02-12T09:30:00').toISOString(),
        stopDate: new Date('2019-02-12T16:00:00').toISOString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
        technicalBreak: 15,
      },
      <ReservationBackend> {
        id: '4',
        name: "Czwarte drukowanie",
        duration: 50,
        startDate: new Date('2019-02-15T14:30:00').toISOString(),
        stopDate: new Date('2019-02-17T17:00:00').toISOString(),
        type: "PRINTING",
        user: UserDataFactory.getOne(),
        technicalBreak: 15,
      }
    ]
  }
}
