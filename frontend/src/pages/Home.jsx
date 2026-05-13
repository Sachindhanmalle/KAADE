import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiZap, FiScissors, FiUsers } from 'react-icons/fi';
import DoctorCard from '../components/DoctorCard.jsx';
import StatsCard from '../components/StatsCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { departments, doctorProfiles, stats, testimonials } from '../utils/data.js';

const Home = () => (
  <main className="mx-auto max-w-7xl px-6 pb-24 pt-8 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"></div>
    <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-purple-200/20 rounded-full blur-xl"></div>
    <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">Premium oncology care</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight gradient-text sm:text-6xl">
            KAADE Hospital – Advanced Care. Trusted Doctors. Better Lives.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Delivering world-class cancer care with compassionate consultation, expert oncologists, and a patient-first approach for every appointment.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link to="/appointment" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-emerald-600">
            Book Appointment
          </Link>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-slate-800">
            <p className="text-sm uppercase tracking-[0.18em] text-emerald-700">24/7 Emergency</p>
            <p className="mt-1 text-lg font-semibold">+91 9876543210</p>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2.5rem] hero-gradient text-white shadow-card p-8 glow-effect">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_50%)]"></div>
        <div className="relative grid gap-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Welcome to KAADE</p>
            <h2 className="text-4xl font-semibold">Cancer care delivered with precision and warmth.</h2>
            <p className="max-w-xl leading-7 text-slate-100/90">Experience advanced diagnostics, personalized treatment planning, and ongoing support in a premium hospital environment.</p>
          </div>
          <div className="grid gap-4 rounded-[2rem] bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Appointment success</span>
              <span className="font-semibold">97%</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Experienced specialists</span>
              <span className="font-semibold">25+</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Patient satisfaction</span>
              <span className="font-semibold">4.9/5</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    <section id="departments" className="mt-20 space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Why choose KAADE</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Premium support from consultation to recovery.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">Benefit from holistic cancer care, rapid appointment booking, advanced diagnostics, and dedicated patient support teams.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {departments.map((department, index) => {
          const icons = [FiHeart, FiZap, FiScissors, FiUsers];
          const Icon = icons[index];
          return (
            <motion.div
              key={department.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="section-card hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-2xl text-emerald-600" />
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{department.name}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{department.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    <section className="mt-20 space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Meet our team</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Trusted oncologists who listen.</h2>
        </div>
        <Link to="/doctors" className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">View all doctors</Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-4">
        {doctorProfiles.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={index % 2 === 1 ? 'lg:mt-8' : ''}
          >
            <DoctorCard doctor={doctor} />
          </motion.div>
        ))}
      </div>
    </section>

    <section className="mt-20 space-y-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Impact metrics</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Healthcare performance you can trust.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => <StatsCard key={item.label} value={item.value} label={item.label} />)}
      </div>
    </section>

    <section className="mt-20 space-y-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Testimonials</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Real stories from comforted patients.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </section>

    <section className="mt-20 grid gap-8 lg:grid-cols-2">
      <div className="section-card bg-emerald-700 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Online consultation</p>
        <h2 className="mt-4 text-3xl font-semibold">Virtual care for follow-ups and quick health advice.</h2>
        <p className="mt-4 text-slate-100/90">Connect instantly with our specialist team from the comfort of your home, review treatment options, and schedule follow-up sessions online.</p>
        <div className="mt-6 space-y-3 text-sm">
          <p>• Video consultations with senior oncologists</p>
          <p>• Fast digital reports and reminders</p>
          <p>• Secure patient follow-up track</p>
        </div>
      </div>
      <div className="section-card dark:bg-slate-950 dark:text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200 dark:text-emerald-300">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Common patient questions answered.</h2>
        <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
          <div>
            <p className="font-semibold text-slate-950 dark:text-white">How soon can I get an appointment?</p>
            <p className="mt-2 text-sm">Most cases are assigned within 24 hours based on doctor availability and care need.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-950 dark:text-white">Can I consult online before visiting?</p>
            <p className="mt-2 text-sm">Yes, our online consultation option helps you connect with a specialist before your first hospital visit.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-950 dark:text-white">What should I bring to my first appointment?</p>
            <p className="mt-2 text-sm">Bring your medical records, test reports, and a list of symptoms so the care team can create a precise plan.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-20 grid gap-6 xl:grid-cols-[0.95fr_0.85fr]">
      <div className="section-card bg-slate-950 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">AI Chatbot</p>
        <h2 className="mt-4 text-3xl font-semibold">Ask the KAADE health assistant.</h2>
        <p className="mt-4 text-slate-200/90">Use our AI chatbot placeholder to explore symptoms, learn about specialist care, and access hospital guidance in seconds.</p>
        <div className="mt-6 space-y-4 rounded-3xl bg-slate-900/80 p-6">
          <p className="text-sm text-slate-300">Hi, I am KAADE Care Bot. Share your concern and I will guide you to the right specialist or service.</p>
          <button className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white hover:bg-emerald-500">Start chat</button>
        </div>
      </div>
      <div className="section-card">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Latest news</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Health stories and clinical updates.</h2>
        <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
          <article className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h3 className="font-semibold text-slate-950 dark:text-white">New patient support streamlines recovery</h3>
            <p className="mt-3 text-sm">Discover how KAADE is enhancing care coordination with digital reminders and wellness coaching.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h3 className="font-semibold text-slate-950 dark:text-white">Expert insights on treatment planning</h3>
            <p className="mt-3 text-sm">Learn about the latest oncology therapy trends from our senior care team.</p>
          </article>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
