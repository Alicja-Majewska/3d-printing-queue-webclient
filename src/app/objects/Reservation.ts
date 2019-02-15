import { User } from './User';

export class Reservation {
    private _id: number;
    private _name: string;
    private _duration: number;
    private _startData: string;
    private _stopData: string;
    private _type: string;
    private _user: User;

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get duration(): number {
        return this._duration;
    }

    public get startData(): string {
        return this._startData;
    }

    public get stopData(): string {
        return this._stopData;
    }

    public get type(): string {
        return this._type;
    }

    public get user(): User {
        return this._user;
    }
    
}