import Doctor from '../models/Doctor.js';

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Cannot fetch doctors', error: error.message });
  }
};

export const addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ message: 'Cannot add doctor', error: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json({ message: 'Doctor removed' });
  } catch (error) {
    res.status(500).json({ message: 'Cannot delete doctor', error: error.message });
  }
};

export const updateDoctorSlots = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    doctor.availableSlots = req.body.availableSlots || doctor.availableSlots;
    await doctor.save();
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Cannot update slots', error: error.message });
  }
};
