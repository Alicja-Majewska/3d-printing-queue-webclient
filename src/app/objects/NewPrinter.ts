import {NewPrinterBackend} from './NewPrinterBackend';
export class NewPrinter {

  private _guid: string;
  private _name: string;

  constructor(guid: string, name: string) {
    this._guid = guid;
    this._name = name;
  }

  toBackend(): NewPrinterBackend {
    return <NewPrinterBackend> {
      guid: this._guid,
      name: this._name
    };
  }

}
