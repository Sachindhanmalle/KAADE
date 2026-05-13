import { useEffect, useMemo, useState } from 'react';
import { fetchAppointments, updateAppointmentStatus } from '../services/api.js';
import { toast } from '../components/toastHelper.js';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('kaadeAdminToken');

  const loadAppointments = async () => {
    try {
      const data = await fetchAppointments(token);
      setAppointments(data);
    } catch (error) {
      toast('Unable to load appointments', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      toast('Please log in first', 'warning');
      return;
    }
    loadAppointments();
  }, [token]);

  const handleStatus = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status, token);
      toast('Appointment status updated', 'success');
      loadAppointments();
    } catch (error) {
      toast('Update failed', 'error');
    }
  };

  const filtered = useMemo(
    () => appointments.filter((item) => item.patient.name.toLowerCase().includes(search.toLowerCase()) || item.patient.email.toLowerCase().includes(search.toLowerCase()) || item.doctor.name.toLowerCase().includes(search.toLowerCase())),
    [appointments, search]
  );

  if (!token) {
    return (
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-20 text-center">
        <div className="section-card">
          <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">Admin panel</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Please login at /admin/login to access appointment management.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <div className="mb-8 grid gap-6 rounded-[2.5rem] bg-gradient-to-r from-emerald-700 to-teal-500 p-8 text-white shadow-card">
        <div>
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <p className="mt-2 text-slate-100/90">Review bookings, approve appointments, and keep your patient queue organized.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-6">Total bookings<br /><span className="mt-3 block text-3xl font-semibold">{appointments.length}</span></div>
          <div className="rounded-3xl bg-white/10 p-6">Approved<br /><span className="mt-3 block text-3xl font-semibold">{appointments.filter((a) => a.status === 'approved').length}</span></div>
          <div className="rounded-3xl bg-white/10 p-6">Pending<br /><span className="mt-3 block text-3xl font-semibold">{appointments.filter((a) => a.status === 'pending').length}</span></div>
        </div>
      </div>

      <div className="section-card">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Appointments</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Search patients or doctor names to filter the appointment list.</p>
          </div>
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search patients or doctors" className="w-full max-w-sm rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-emerald-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100" />
        </div>

        {loading ? (
          <p className="text-slate-700 dark:text-slate-300">Loading appointments...</p>
        ) : (
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <p className="text-slate-600 dark:text-slate-400">No matching appointments found.</p>
            ) : (
              filtered.map((appointment) => (
                <div key={appointment._id} className="rounded-3xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{appointment.patient.name} • {appointment.patient.email}</p>
                      <p className="text-xl font-semibold text-slate-950 dark:text-white">{appointment.doctor.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{appointment.department} • {appointment.date} at {appointment.time}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-full px-4 py-2 text-xs font-semibold ${appointment.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : appointment.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'} dark:bg-slate-800 dark:text-slate-200`}>
                        {appointment.status}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">ID: {appointment.appointmentId}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button onClick={() => handleStatus(appointment._id, 'approved')} className="rounded-full bg-emerald-700 px-4 py-2 text-sm text-white transition hover:bg-emerald-600">Approve</button>
                    <button onClick={() => handleStatus(appointment._id, 'rejected')} className="rounded-full bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-500">Reject</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
