export class UserData {
    name: string;
    email: string;
    password: string;
    tel: string;

    constructor(name, email, pwd, tel) {
        this.name = name;
        this.email = email;
        this.password = pwd;
        this.tel = tel;
    }
}