import express from 'express';
import { createPatient, getAllPatients } from '../controllers/patientController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', createPatient);
router.get('/', protect, getAllPatients);

export default router;
