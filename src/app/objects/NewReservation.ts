import {NewReservationBackend} from './NewReservationBackend';

export class NewReservation {

  private _printerId: string;
  private _name: string;
  private _duration: string;
  private _startDate: Date;
  private _userId: string;


  constructor(printerId: string, name: string, duration: string, startDate: Date, userId: string) {
    this._printerId = printerId;
    this._name = name;
    this._duration = duration;
    this._startDate = startDate;
    this._userId = userId;
  }

  toBackend(): NewReservationBackend {
    return <NewReservationBackend> {
      printerId: this._printerId,
      name: this._name,
      duration: this._duration,
      startDate: this._startDate.toISOString(),
      userId: this._userId
    }
  }

}
