import { Person, genders } from "../Person/Person";


export enum skills {
    PILOT,
    COPILOT,
    FLIGHTATTENDANT,
    FLIGHTENGINEER,
    CREW
}

export class Employee extends Person {
    constructor(private personality: string, private skills: skills, name: string, gender: genders, passportNumber: number, email: string, phoneNumber: number, address: string, birthDate: string){
        super(name, gender, passportNumber, email, phoneNumber, address, birthDate)
    } 
}