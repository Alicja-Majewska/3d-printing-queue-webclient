import { UserEnum } from './UserEnum';

export interface UserBackend {
    id: number;
    name: string;
    surname: string;
    mail: string;
    role: UserEnum;
}