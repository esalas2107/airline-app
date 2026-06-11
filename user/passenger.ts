import { User } from "./user";

class Passenger extends User {
    public _passengerId: number;
    public _email: string;
    public _phoneNumber: string;

    constructor(passengerId: number, email: string, phoneNumber: string, userId: number, firstName: string, lastName: string, birthDate: Date, passportId: string) {
        super(userId, firstName, lastName, birthDate, passportId);
        this._passengerId = passengerId;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }

    get passengerId(): number {
        return this._passengerId;
    }

    get email(): string {
        return this._email;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    toString(): string {
        return super.toString() + `PASSENGER ID: ${this.passengerId}
        EMAIL: ${this.email}
        PHONE NUMBER: ${this.phoneNumber}`;
    }
}