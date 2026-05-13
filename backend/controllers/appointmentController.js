import Appointment from '../models/Appointment.js';
import Doctor from '../models/Doctor.js';
import { sendAppointmentEmail } from '../utils/email.js';

const generateAppointmentId = () => `KAADE-${Math.floor(100000 + Math.random() * 900000)}`;

export const bookAppointment = async (req, res) => {
  try {
    const { patient, doctorId, department, date, time } = req.body;
    const appointmentId = generateAppointmentId();

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    const existing = await Appointment.findOne({
      'patient.email': patient.email,
      doctor: doctorId,
      date,
      time,
    });

    if (existing) {
      return res.status(409).json({ message: 'This slot is already booked' });
    }

    const appointment = await Appointment.create({
      patient,
      doctor: doctorId,
      department,
      date,
      time,
      appointmentId,
    });

    await sendAppointmentEmail(patient.email, appointmentId, doctor.name, date, time);

    res.status(201).json({ appointmentId, message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Could not book appointment', error: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctor').sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Cannot load appointments', error: error.message });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    appointment.status = req.body.status;
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Cannot update appointment', error: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Cannot remove appointment', error: error.message });
  }
};
