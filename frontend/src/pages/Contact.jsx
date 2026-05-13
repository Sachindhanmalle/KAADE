const Contact = () => (
  <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
    <section className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] items-start">
      <div className="section-card space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Contact details</p>
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">Reach KAADE Hospital for support and appointments.</h1>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">Send your request, call our emergency line, or connect with us on WhatsApp for fast assistance.</p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h2 className="font-semibold text-slate-950 dark:text-white">Phone</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">+91 9876543210</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h2 className="font-semibold text-slate-950 dark:text-white">WhatsApp</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">+91 9876543210</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h2 className="font-semibold text-slate-950 dark:text-white">Email</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">contact@kaadehospital.com</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-700">
            <h2 className="font-semibold text-slate-950 dark:text-white">Address</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">KAADE Hospital, Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>
      <div className="section-card rounded-[2.5rem] bg-emerald-700 text-white">
        <h2 className="text-3xl font-semibold">Need fast support?</h2>
        <p className="mt-4 leading-7 text-slate-100/90">Our on-call coordinators are available 24/7 to help with appointment confirmations, referrals, and patient care requests.</p>
        <div className="mt-8 space-y-4 text-sm">
          <p><strong>Emergency:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> contact@kaadehospital.com</p>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
