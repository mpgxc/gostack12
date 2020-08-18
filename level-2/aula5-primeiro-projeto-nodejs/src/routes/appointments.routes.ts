import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.post('/', (req, res) => {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);
    const startedDate = startOfHour(parsedDate);
    const findAppointmentInSameDate = appointmentsRepository.findByDate(
        startedDate,
    );

    if (findAppointmentInSameDate) {
        return res.status(400).json('Horário já preenchido!');
    }

    const appointmentTemp = appointmentsRepository.create(
        provider,
        startedDate,
    );
    return res.json(appointmentTemp);
});

export default appointmentsRouter;
