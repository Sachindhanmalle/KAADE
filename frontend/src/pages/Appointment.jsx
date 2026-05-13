import AppointmentForm from '../components/AppointmentForm.jsx';

const Appointment = () => (
  <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
    <section className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Book appointment</p>
        <h1 className="text-4xl font-semibold text-black">Schedule your consultation with KAADE specialists.</h1>
        <p className="max-w-2xl text-base leading-7 text-black">Choose your doctor, preferred time, and provide details so our team can confirm and support your visit.</p>
      </div>
      <div className="rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-teal-500 p-8 text-white shadow-card">
        <h2 className="text-2xl font-semibold">Need assistance?</h2>
        <p className="mt-4 text-sm leading-6 text-white/90">Our patient coordinators are available to support your booking and care request around the clock.</p>
        <div className="mt-6 space-y-4 text-sm">
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> contact@kaadehospital.com</p>
          <p><strong>Location:</strong> Bangalore, Karnataka, India</p>
        </div>
      </div>
    </section>
    <section className="mt-12">
      <AppointmentForm />
    </section>
  </main>
);

export default Appointment;
