import { UserEnum } from './UserEnum';

export class User {
  
    private _id: string;
    private _name: string;
    private _surname: string;
    private _mail: string;
    private _role: UserEnum;

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

