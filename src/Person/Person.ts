
export enum genders {
    MALE,
    FEMALE
}

export abstract class Person {
    constructor
    (
        private name: string, 
        private email: string, 
        private phoneNumber: number, 
        private address: string,
        private gender: genders
    ) {}
}