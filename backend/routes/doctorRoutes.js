import express from 'express';
import { getDoctors, addDoctor, deleteDoctor, updateDoctorSlots } from '../controllers/doctorController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', getDoctors);
router.post('/', protect, addDoctor);
router.delete('/:id', protect, deleteDoctor);
router.put('/:id/slots', protect, updateDoctorSlots);

export default router;
