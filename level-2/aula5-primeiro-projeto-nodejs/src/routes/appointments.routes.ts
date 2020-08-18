import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

// Banco na Memória, por hora
const appointmentsData: Appointment[] = [];

appointmentsRouter.post('/', (req, res) => {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);
    const startedDate = startOfHour(parsedDate);

    const findAppointmentInSameDate = appointmentsData.find(app =>
        isEqual(startedDate, app.date),
    );

    if (findAppointmentInSameDate) {
        return res.status(400).json('Horário já preenchido!');
    }
    const appointmentTemp = new Appointment(provider, startedDate);

    appointmentsData.push(appointmentTemp);

    return res.json(appointmentTemp);
});

appointmentsRouter.get('/', (req, res) => {
    return res.json({ message: 'GET' });
});

export default appointmentsRouter;
