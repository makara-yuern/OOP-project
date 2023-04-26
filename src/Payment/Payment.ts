
export class Payment {
    constructor(private amount: number, private currency: string, private sender: string, private reciever: string, status: string){}
}