import {PrinterStatus} from './PrinterStatus';
import {PrinterBackend} from './PrinterBackend';

export class Printer {

  private _id: string;
  private _name: string;
  private _status: PrinterStatus;

  static fromBackend(printerBackend: PrinterBackend): Printer {
    const printer: Printer = new Printer();

    printer._id = printerBackend.id;
    printer._name = printerBackend.name;
    printer._status = PrinterStatus.valueOf(printerBackend.status);

    return printer;
  }

  static fromBackends(printerBackends: PrinterBackend[]): Printer[] {
    return printerBackends.map(backend => Printer.fromBackend(backend));
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get status(): PrinterStatus {
    return this._status;
  }

  isBroken(): boolean {
    return this._status === PrinterStatus.BROKEN;
  }

  isActive(): boolean {
    return this._status === PrinterStatus.ACTIVE;
  }
}
