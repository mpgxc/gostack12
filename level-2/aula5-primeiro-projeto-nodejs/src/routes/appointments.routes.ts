import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

const appointmentsRouter = Router();

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
    const appointmentTemp = {
        id: uuid(),
        provider,
        date: startedDate,
    };
    appointmentsData.push(appointmentTemp);

    return res.json(appointmentTemp);
});

appointmentsRouter.get('/', (req, res) => {
    return res.json({ message: 'GET' });
});

export default appointmentsRouter;
