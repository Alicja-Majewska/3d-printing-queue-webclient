import {NewReservationBackend} from './NewReservationBackend';

export class NewReservation {

  private _guid: string;
  private _printerId: string;
  private _name: string;
  private _duration: number;
  private _startDate: Date;
  private _userId: string;


  constructor(printerId: string, name: string, duration: number, startDate: Date, userId: string, guid: string) {
    this._guid = guid;
    this._printerId = printerId;
    this._name = name;
    this._duration = duration;
    this._startDate = startDate;
    this._userId = userId;
  }

  toBackend(): NewReservationBackend {
    return <NewReservationBackend> {
      guid: this._guid,
      printerId: this._printerId,
      name: this._name,
      duration: this._duration,
      startDate: this._startDate.toISOString(),
      userId: this._userId
    }
  }

}
