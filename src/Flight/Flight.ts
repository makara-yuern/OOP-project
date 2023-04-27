import { Airline } from "../Airline/Airline";

export enum meals {
    VEGETARIAN,
    VEGAN,
    DIARYFREE,
    HALAL,
    KOSHER,
    FORTH
} 

export class Flight {
    constructor(public flightNumber: number, public departure: string, public arrivalTime: string, airline: Airline){}
}