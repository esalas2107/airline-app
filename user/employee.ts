import { User } from "./user";

type EmployeeRole = "Captain" | "Copilot" | "Flight Engineer" | "Purser" | "Stewardess" | "Counter staff" | "Gate staff" | "Flight dispatcher"

class Employee extends User {
    public _employeeId: number;
    public _role: EmployeeRole;

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
        return super.toString() + `EMPLOYEE ID: ${this.employeeId}
        ROLE: ${this.role}`;
    }
}

const employee1 = new Employee(1, "Captain", 1, "Esteban", "Salas", new Date(2002, 6, 21), "118480995");

console.log(employee1.toString());