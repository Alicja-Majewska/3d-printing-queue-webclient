import {User} from './User';
import {ReservationBackend} from './ReservationBackend';

export class Reservation {
  private _id: number;
  private _name: string;
  private _duration: number;
  private _startDate: Date;
  private _stopDate: Date;
  private _type: string;
  private _user: User;

  static fromBackend(reservationBackend: ReservationBackend): Reservation {
    const reservation: Reservation = new Reservation();
    reservation._id = reservationBackend.id;
    reservation._name = reservationBackend.name;
    reservation._duration = reservationBackend.duration;
    reservation._startDate = new Date(reservationBackend.startDate);
    reservation._stopDate = new Date(reservationBackend.stopDate);
    debugger;
    reservation._type = reservationBackend.type;
    reservation._user = reservationBackend.user;

    return reservation;
  }

  static fromBackends(reservations: ReservationBackend[]) {
    return reservations.map(backend => Reservation.fromBackend(backend));
  }

  public get id(): number {
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

  public get type(): string {
    return this._type;
  }

  public get user(): User {
    return this._user;
  }

}
