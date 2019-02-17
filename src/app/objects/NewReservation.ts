import {NewReservationBackend} from './NewReservationBackend';

export class NewReservation {

  private _guid: string;
  private _printerId: string;
  private _name: string;
  private _durationInMinutes: number;
  private _startDate: Date;
  private _ownerId: string;


  constructor(printerId: string, name: string, durationInMinutes: number, startDate: Date, ownerId: string, guid: string) {
    this._guid = guid;
    this._printerId = printerId;
    this._name = name;
    this._durationInMinutes = durationInMinutes;
    this._startDate = startDate;
    this._ownerId = ownerId;
  }

  toBackend(): NewReservationBackend {
    return <NewReservationBackend> {
      guid: this._guid,
      printerId: this._printerId,
      name: this._name,
      durationInMinutes: this._durationInMinutes,
      startDate: this._startDate.toISOString(),
      ownerId: this._ownerId
    }
  }

  get guid(): string {
    return this._guid;
  }

  get printerId(): string {
    return this._printerId;
  }

  get name(): string {
    return this._name;
  }

  get durationInMinutes(): number {
    return this._durationInMinutes;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get ownerId(): string {
    return this._ownerId;
  }


}
