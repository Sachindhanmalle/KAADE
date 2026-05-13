import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
  },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  department: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  appointmentId: { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
