import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const DoctorCard = ({ doctor }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="section-card space-y-5 hover:shadow-card-hover transition-all duration-300"
  >
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-1">
      <div className="overflow-hidden rounded-3xl bg-white dark:bg-slate-900">
        <img src={doctor.image} alt={doctor.name} className="h-64 w-full object-cover" />
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
        <FiCheckCircle className="text-sm" />
        Available
      </div>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{doctor.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{doctor.specialization}</p>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{doctor.experience}</p>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{doctor.description}</p>
      <Link to="/appointment" className="btn-primary inline-block text-center">
        Book Appointment
      </Link>
    </div>
  </motion.div>
);

export default DoctorCard;
