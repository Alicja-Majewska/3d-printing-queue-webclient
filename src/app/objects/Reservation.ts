import {User} from './User';
import {ReservationBackend} from './ReservationBackend';
import {ReservationType} from './ReservationType';

export class Reservation {

  private _id: string;
  private _name: string;
  private _duration: number;
  private _startDate: Date;
  private _stopDate: Date;
  private _type: ReservationType;
  private _user: User;
  private _technicalBreak: number;


  static createReservation(id: string, name: string, duration: number, startDate: Date, stopDate: Date,
                    type: ReservationType, user: User, technicalBreak: number): Reservation {
    const reservation = new Reservation();
    reservation._id = id;
    reservation._name = name;
    reservation._duration = duration;
    reservation._startDate = startDate;
    reservation._stopDate = stopDate;
    reservation._type = type;
    reservation._user = User.fromBackend(user);
    reservation._technicalBreak = technicalBreak;

    return reservation;
  }

  constructor() {

  }

  static fromBackend(reservationBackend: ReservationBackend): Reservation {
    const reservation: Reservation = new Reservation();
    reservation._id = reservationBackend.id;
    reservation._name = reservationBackend.name;
    reservation._duration = reservationBackend.duration;
    reservation._startDate = new Date(reservationBackend.startDate);
    reservation._stopDate = new Date(reservationBackend.stopDate);
    reservation._type = ReservationType.valueOf(reservationBackend.type);
    reservation._user = User.fromBackend(reservationBackend.user);
    reservation._technicalBreak = reservationBackend.technicalBreak;

    return reservation;
  }

  static fromBackends(reservations: ReservationBackend[]) {
    return reservations.map(backend => Reservation.fromBackend(backend));
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get duration(): number {
    return this._duration;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public get stopDate(): Date {
    return this._stopDate;
  }

  public get type(): ReservationType {
    return this._type;
  }

  public get user(): User {
    return this._user;
  }

  public get technicalBreak(): number {
    return this._technicalBreak;
  }


}
