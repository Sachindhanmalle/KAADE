import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-slate-200/80 bg-slate-50 dark:bg-slate-950 dark:border-slate-800">
    <div className="mx-auto max-w-7xl px-6 py-14 text-slate-700 dark:text-slate-300">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-lg shadow-emerald-200/30">K</div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">KAADE Hospital</h3>
          <p className="mt-3 max-w-sm text-sm leading-6">
            Advanced Care. Trusted Doctors. Better Lives. Premium oncology care with compassionate support at every step.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-emerald-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-emerald-600">About</Link></li>
            <li><Link to="/doctors" className="hover:text-emerald-600">Doctors</Link></li>
            <li><Link to="/appointment" className="hover:text-emerald-600">Appointment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Contact</h4>
          <div className="space-y-3 text-sm">
            <p><FiPhone className="inline mr-2" /> +91 9876543210</p>
            <p><FiMail className="inline mr-2" /> contact@kaadehospital.com</p>
            <p><FiMapPin className="inline mr-2" /> KAADE Hospital, Bangalore, Karnataka, India</p>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Connect</h4>
          <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
            <a href="https://instagram.com/kaadehospital" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 p-3 hover:bg-emerald-50 dark:border-slate-700 dark:hover:bg-slate-800">
              <FiInstagram size={20} />
            </a>
            <a href="mailto:contact@kaadehospital.com" className="rounded-2xl border border-slate-200 p-3 hover:bg-emerald-50 dark:border-slate-700 dark:hover:bg-slate-800">
              <FiMail size={20} />
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">© 2026 KAADE Hospital. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
