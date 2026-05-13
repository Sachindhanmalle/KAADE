import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import { createAdminUser } from './controllers/authController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
  try {
    await createAdminUser();
    const { seedDoctors } = await import('./utils/seeder.js');
    await seedDoctors();
  } catch (error) {
    console.warn('Startup seed failed:', error.message);
  }
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'KAADE Hospital API is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/patients', patientRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
