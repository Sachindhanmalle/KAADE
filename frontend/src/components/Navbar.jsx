import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Departments', href: '/#departments' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50 flex items-center justify-center text-white glow-effect">K</div>
          KAADE Hospital
        </Link>

        <nav className={`hidden items-center gap-8 md:flex`}>
          {menuItems.map((item) => (
            <NavLink key={item.label} to={item.href} className={({ isActive }) => `transition ${isActive ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-700'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-white/20 bg-gradient-to-r from-accent to-coral px-4 py-2 text-sm text-white shadow-lg hover:shadow-card-hover transition-all duration-300 hover:scale-105" onClick={onThemeToggle}>
            {theme === 'light' ? <FiMoon className="inline" /> : <FiSun className="inline" />} {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200" onClick={() => setOpen(!open)}>
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/95">
          <div className="flex flex-col gap-4 p-5">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-emerald-700 dark:text-slate-200">
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <FiPhone /> +91 9876543210
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
