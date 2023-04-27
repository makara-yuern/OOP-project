import { Passanger } from "../Passanger/Passanger";

export enum meals {
    VEGETARIAN,
    VEGAN,
    DIARYFREE,
    HALAL,
    KOSHER,
    FORTH
} 

export class Flight {
    constructor
    (
        public flightNumber: number, public departure: string, public arrivalTime: string, 
        passangers: Passanger, meal: meals
    ) 
    {}
}