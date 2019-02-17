import {UserEnum} from './UserEnum';
import {UserBackend} from './UserBackend';

export class User {

  private _id: string;
  private _name: string;
  private _surname: string;
  private _mail: string;
  private _role: UserEnum;

  static fromBackend(backend: UserBackend): User {
    const user: User = new User();
    user._id = backend.id;
    user._name = backend.name;
    user._surname = backend.surname;
    user._mail = backend.mail;
    user._role = UserEnum.valueOf(backend.role);

    return user;
  }

  get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get surname(): string {
    return this._surname;
  }

  public get mail(): string {
    return this._mail;
  }

  public get role(): UserEnum {
    return this._role;
  }

}

