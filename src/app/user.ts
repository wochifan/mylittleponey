export class User {

    loging: string;
    pass: string;

    constructor(loging?: string) {
        this.loging = loging === undefined ? null : loging;
    }
}
