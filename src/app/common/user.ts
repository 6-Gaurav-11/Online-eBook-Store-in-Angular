export class User {

    public username!: string;
    public fullName!: string;
    public email!: string;
    public password!: string;
    public roles!: string[];
    constructor(
        username: string,
        fullName: string,
        email: string,
        password: string,
        roles: string[],
    ) { }
}
