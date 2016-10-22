export class Event {
    name: string;
    date: Date;
    facebookUrl: string;

    constructor(name: string, date: Date, facebookUrl?: string){
        this.name = name;
        this.date = date;

        this.facebookUrl = facebookUrl || '';
    }
};
