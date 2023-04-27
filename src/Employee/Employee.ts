import { Flight } from "../Flight/Flight";
import { Person, genders } from "../Person/Person";

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
        public personality: string, name: string, gender: genders, passportNumber: number, email: string, 
        phoneNumber: number, address: string, birthDate: string, flights: Flight, skills: skills
    )
    {
        super
        (
            name, gender, passportNumber, email, phoneNumber, address, birthDate
        )
    }
}