import { useEffect, useState } from 'react';

const StatsCard = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      const suffix = value.replace(/[\d.]/g, '');
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const displayValue = value.includes('K+') ? `${count.toFixed(1)}K+` : value.includes('+') ? `${Math.floor(count)}+` : count;

  return (
    <div id={`stat-${label}`} className="rounded-[2rem] border border-white/20 bg-gradient-to-br from-primary via-secondary to-accent p-6 text-center shadow-card backdrop-blur-md text-white hover:scale-105 transition-all duration-300 glow-effect">
      <p className="text-3xl font-semibold">{displayValue}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-200/90">{label}</p>
    </div>
  );
};

export default StatsCard;
