const StatsCard = ({ value, label }) => (
  <div className="rounded-[2rem] border border-white/20 bg-gradient-to-br from-primary via-secondary to-accent p-6 text-center shadow-card backdrop-blur-md text-white hover:scale-105 transition-all duration-300 glow-effect">
    <p className="text-3xl font-semibold">{value}</p>
    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-200/90">{label}</p>
  </div>
);

export default StatsCard;
