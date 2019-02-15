import { UserEnum } from './UserEnum';

export interface UserBackend {
    id: string;
    name: string;
    surname: string;
    mail: string;
    role: UserEnum;
}
