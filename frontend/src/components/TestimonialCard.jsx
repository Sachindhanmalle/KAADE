const TestimonialCard = ({ testimonial }) => (
  <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-card dark:border-slate-700 dark:bg-slate-900/80">
    <p className="text-slate-700 dark:text-slate-200">“{testimonial.message}”</p>
    <div className="mt-6">
      <p className="font-semibold text-emerald-700">{testimonial.name}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</p>
    </div>
  </div>
);

export default TestimonialCard;
