import { useEffect, useState } from 'react';
import { fetchDoctors } from '../services/api.js';
import DoctorCard from '../components/DoctorCard.jsx';
import { doctorProfiles } from '../utils/data.js';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors).catch(() => setDoctors(doctorProfiles));
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      <section className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Our specialists</p>
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Expert oncologists ready to guide your care.</h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">Browse our team and book an appointment with a trusted cancer specialist who understands your needs.</p>
      </section>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {(doctors.length ? doctors : doctorProfiles).map((doctor) => <DoctorCard key={doctor.id || doctor._id} doctor={doctor} />)}
      </div>
    </main>
  );
};

export default Doctors;
