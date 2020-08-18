import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
    private appointmentsData: Appointment[];

    constructor() {
        this.appointmentsData = [];
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointmentsData.find(appointment =>
            isEqual(date, appointment.date),
        );
        return findAppointment || null;
    }

    public create(provider: string, date: Date): Appointment {
        const appointmentTemp = new Appointment(provider, date);

        this.appointmentsData.push(appointmentTemp);

        return appointmentTemp;
    }
}

export default AppointmentsRepository;
