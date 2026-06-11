import { User } from "./user";

type EmployeeRole = "Captain" | "Copilot" | "Flight Engineer" | "Purser" | "Stewardess" | "Counter staff" | "Gate staff" | "Flight dispatcher"

class Employee extends User {
    private _employeeId: number;
    private _role: EmployeeRole;

    constructor(employeeId: number, role: EmployeeRole, userId: number, firstName: string, lastName: string, birthDate: Date, passportId: string) {
        super(userId, firstName, lastName, birthDate, passportId);
        this._employeeId = employeeId;
        this._role = role;
    }

    get employeeId(): number {
        return this._employeeId;
    }

    get role(): EmployeeRole {
        return this._role;
    }

    toString(): string {
        return `
        *** EMPLOYEE INFORMATION ***
        ID: ${this.userId}
        NAME: ${this.firstName}
        LAST NAME: ${this.lastName}
        AGE: ${this.calculateUserAge(this.birthDate)} years old
        PASSPORT: ${this.passportId} 
        EMPLOYEE ID: ${this.employeeId}
        ROLE: ${this.role}
        `;
    }
}
