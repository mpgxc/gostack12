import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointmentsData: Appointment[];

    constructor() {
        this.appointmentsData = [];
    }

    public all(): Appointment[] {
        return this.appointmentsData;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointmentsData.find(appointment =>
            isEqual(date, appointment.date),
        );
        return findAppointment || null;
    }

    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const appointmentTemp = new Appointment({ provider, date });

        this.appointmentsData.push(appointmentTemp);

        return appointmentTemp;
    }
}

export default AppointmentsRepository;
