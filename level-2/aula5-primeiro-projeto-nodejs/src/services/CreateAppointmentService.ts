import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ provider, date }: RequestDTO): Appointment {
        const startedDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            startedDate,
        );

        if (findAppointmentInSameDate) {
            throw Error('Este hoário já está agendado!');
        }

        const appointmentTemp = this.appointmentsRepository.create({
            provider,
            date: startedDate,
        });
        return appointmentTemp;
    }
}

export default CreateAppointmentService;
