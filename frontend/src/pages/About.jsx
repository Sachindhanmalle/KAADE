const About = () => (
  <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
    <section className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr] items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">About KAADE</p>
        <h1 className="text-4xl font-semibold text-black">A modern hospital built on trust, expertise, and patient-first care.</h1>
        <p className="max-w-2xl text-base leading-7 text-black">KAADE Hospital specializes in cancer treatment with a premium environment, advanced diagnostics, and seamless appointment management.</p>
      </div>
      <div className="section-card space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-black">Our mission</h2>
          <p className="mt-3 text-black">To provide compassionate oncology care using modern treatment technologies and compassionate patient guidance.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black">Our vision</h2>
          <p className="mt-3 text-black">To become the most trusted cancer care destination where every patient receives personalized support and healing.</p>
        </div>
      </div>
    </section>

    <section className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="section-card">
        <h2 className="text-2xl font-semibold text-black">Advanced treatments</h2>
        <p className="mt-4 text-black">We offer medical oncology, radiation therapy, surgical oncology, and supportive care with a multidisciplinary team.</p>
      </div>
      <div className="section-card">
        <h2 className="text-2xl font-semibold text-black">Patient-first care</h2>
        <p className="mt-4 text-black">Every appointment is tailored to your health history, concerns, and goals, backed by clear communication and empathy.</p>
      </div>
    </section>
  </main>
);

export default About;
