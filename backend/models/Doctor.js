import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  specialization: { type: String, required: true, trim: true },
  experience: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  description: { type: String, trim: true },
  availableSlots: [{
    date: { type: String, required: true },
    times: [{ type: String }],
  }],
}, {
  timestamps: true,
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
