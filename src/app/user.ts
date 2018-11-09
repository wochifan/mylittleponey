export class User {

    username: string;
    password: string;

    constructor(username?: string) {
        this.username = username === undefined ? null : username;
    }
}
