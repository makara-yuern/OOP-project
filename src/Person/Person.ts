
export enum genders {
    MALE,
    FEMALE
}

export abstract class Person {
    constructor
    (
        private name: string, gender: genders, private passportNumber: number, private email: string, 
        private phoneNumber: number, private address: string, private birthDate: string
    ) 
    {}
}