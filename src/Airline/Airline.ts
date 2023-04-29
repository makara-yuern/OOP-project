import { Airplane } from "../Airplane/Airplane";
import { Employee } from "../Employee/Employee";

export class Airline {
    employees: Employee[]=[];
    constructor( public airlineName: string, airplanes: Airplane
    ) {}

    addEmployee(employee: Employee){
        this.employees.push(employee);
    };

    getEmplyee(){
        return this.employees;
    };

    getEmployeeSalary(){

        let totalSalaryEmployee: number = 0;

        for(let employee of this.employees){
            totalSalaryEmployee += employee.salary
        }
        return totalSalaryEmployee;
    }
}
