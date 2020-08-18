// import { uuid } from 'uuidv4'; //Depreciado
import { v4 as uuidv4 } from 'uuid';

class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.provider = provider;
        this.date = date;
        this.id = uuidv4();
    }
}

export default Appointment;
