import { User } from "./user";

export class Passenger extends User {
    private _passengerId: number;
    private _email: string;
    private _phoneNumber: string;

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
        return `
        *** PASSENGER INFORMATION ***
        NAME: ${this.firstName}
        LAST NAME: ${this.lastName}
        AGE: ${this.calculateUserAge(this.birthDate)} years old
        PASSPORT: ${this.passportId} 
        EMAIL: ${ this.email }
        PHONE NUMBER: ${ this.phoneNumber }
        `;
    }
}
