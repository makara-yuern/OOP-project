import { Flight } from "../Flight/Flight";
import { Person, genders } from "../Person/Person";
import { meals } from "../Flight/Flight";
import { Passanger } from "../Passanger/Passanger";

export enum skills {
    PILOT,
    COPILOT,
    FLIGHTATTENDANTS,
    FLIGHTENGINEER,
    CREW,
    CHEFF,
    AIRPORTCONTROLLER
}

export class Employee extends Person{
    constructor
    (
        // employees: Employee[]=[]
        public personality: string, 
        name: string, 
        email: string, 
        phoneNumber: number, 
        address: string, 
        gender: genders, 
        flights: Flight, 
        skills: skills,
        public salary: number
    )
    {
        super
        (
            name, 
            email, 
            phoneNumber, 
            address,
            gender
        )
    }

    // addEmployeee(employee: Employee){

    // }

    
    // return 0;
}

let flight2 = new Flight("D11", "3 AM", "12 PM","00-00-00",meals.VEGETARIAN);
let p1 = new Passanger(12345,"20/April/2002","10-04-2023","JJ Kiko","jj@gmail.com",89676767,"pp",genders.MALE,"2 baggage",meals.DIARYFREE);

let pilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let coPilot = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let flightAttendant = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let flightEngineer = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let crew = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let chef = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
let airportController = new Employee("Chinese","Lucas","lucas168@gmail.com", 85512348976, "1986 st.",genders.MALE,flight2,skills.PILOT, 1000000);
