export abstract class User {
    protected _userId: number;
    protected _firstName: string;
    protected _lastName: string;
    protected _birthDate: Date;
    protected _passportId: string;

    constructor(userId: number, firstName: string, lastName: string, birthDate: Date, passportId: string) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
        this._passportId = passportId;
    }

    get userId(): number {
        return this._userId;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    get passportId(): string {
        return this._passportId;
    }

    protected calculateUserAge(birthDate: Date): number {
        let userAge = 0;

        const actualDate = new Date();

        const actualDateYear = actualDate.getFullYear();
        const birthDateYear = birthDate.getFullYear();

        const actualDateMonth = actualDate.getMonth();
        const birthDateMonth = birthDate.getMonth();

        const actualDateDay = actualDate.getDate();
        const birthDateDay = birthDate.getDate();

        if(actualDateMonth < birthDateMonth) {
            userAge = (actualDateYear - birthDateYear) - 1
        } else if((actualDateMonth === birthDateMonth) && (actualDateDay < birthDateDay)) {
            userAge = (actualDateYear - birthDateYear) - 1
        } else {
            userAge = actualDateYear - birthDateYear
        }

        return userAge;
    }

    protected abstract toString(): string;

}