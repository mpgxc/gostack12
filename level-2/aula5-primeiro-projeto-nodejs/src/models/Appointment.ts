import { uuid } from 'uuidv4';

class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor(provider: string, date: Date) {
        this.provider = provider;
        this.date = date;
        this.id = uuid();
    }
}

export default Appointment;
