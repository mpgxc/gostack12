import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();
const createAppointmentService = new CreateAppointmentService(
    appointmentsRepository,
);

appointmentsRouter.get('/', (req, res) => {
    const appointments = appointmentsRepository.all();
    return res.json(appointments);
});

appointmentsRouter.post('/', (req, res) => {
    try {
        const { provider, date } = req.body;

        const parsedDate = parseISO(date);

        const appointmentTemp = createAppointmentService.execute({
            provider,
            date: parsedDate,
        });
        return res.json(appointmentTemp);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
