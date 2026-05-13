import express from 'express';
import { bookAppointment, getAppointments, updateAppointmentStatus, deleteAppointment } from '../controllers/appointmentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', bookAppointment);
router.get('/', protect, getAppointments);
router.patch('/:id/status', protect, updateAppointmentStatus);
router.delete('/:id', protect, deleteAppointment);

export default router;
