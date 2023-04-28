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
        public flightNumber: number, 
        public from: string, 
        public to: string,
        public arrivalTime: string, 
        private meal: meals
    ) {}
}