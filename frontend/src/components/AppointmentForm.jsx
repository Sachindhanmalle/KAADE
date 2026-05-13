import { useEffect, useMemo, useState } from 'react';
import { bookAppointment, fetchDoctors } from '../services/api.js';
import { toast } from './toastHelper.js';
import { doctorProfiles } from '../utils/data.js';

const defaultForm = {
  department: 'Medical Oncology',
  doctorId: '',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  message: '',
};

const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

const AppointmentForm = () => {
  const [form, setForm] = useState(defaultForm);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDoctors().then(setDoctors).catch(() => toast('Unable to load doctors', 'error'));
  }, []);

  const availableDoctors = useMemo(() => {
    const filtered = doctors.filter((doc) => doc.specialization.toLowerCase().includes(form.department.toLowerCase().split(' ')[0]));
    return filtered.length ? filtered : doctors.length ? doctors : doctorProfiles;
  }, [doctors, form.department]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.doctorId || !form.date || !form.time || !form.name || !form.phone || !form.email) {
      toast('Please complete all required fields.', 'warning');
      return;
    }
    setLoading(true);
    try {
      const result = await bookAppointment({
        patient: { name: form.name, email: form.email, phone: form.phone, message: form.message },
        doctorId: form.doctorId,
        department: form.department,
        date: form.date,
        time: form.time,
      });
      toast(`Appointment confirmed! ID: ${result.appointmentId}`, 'success');
      setForm(defaultForm);
    } catch (error) {
      toast(error.response?.data?.message || 'Booking failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="section-card grid gap-5 md:grid-cols-2">
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Department</label>
        <select name="department" value={form.department} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500">
          <option>Medical Oncology</option>
          <option>Radiation Oncology</option>
          <option>Surgical Oncology</option>
          <option>Supportive Care</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Doctor</label>
        <select name="doctorId" value={form.doctorId} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500">
          <option value="">Select doctor</option>
          {availableDoctors.map((doctor) => {
            const id = doctor._id || doctor.id;
            return (
              <option key={id} value={id}>{doctor.name} — {doctor.specialization}</option>
            );
          })}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Date</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Time Slot</label>
        <select name="time" value={form.time} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500">
          <option value="">Select time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Patient Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">Phone Number</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500" />
      </div>
      <div className="col-span-full space-y-2">
        <label className="text-sm font-medium text-black">Email address</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500" />
      </div>
      <div className="col-span-full space-y-2">
        <label className="text-sm font-medium text-black">Health concern</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Share symptoms or details" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-black shadow-sm outline-none transition focus:border-emerald-500"></textarea>
      </div>
      <button type="submit" disabled={loading} className="col-span-full btn-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100">
        {loading ? 'Booking...' : 'Confirm Appointment'}
      </button>
    </form>
  );
};

export default AppointmentForm;
