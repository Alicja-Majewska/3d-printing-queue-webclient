export class Printer {

  private _id: number;
  private _name: string;


  get name(): string{
    return this._name;
  }

  get id(): number{
    return this._id;
  }
}
