import { UserBackend } from '../objects/UserBackend';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';

export class UserDataFactory {

    static getOne(): UserBackend {
        return <UserBackend> {
            id: 1,
            name: "Adam",
            surname: "Adminek",
            mail: "adamadminek@admin.com"
        }
    }
}