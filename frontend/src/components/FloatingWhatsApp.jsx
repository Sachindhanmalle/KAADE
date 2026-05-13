import { FiMessageCircle, FiPhone } from 'react-icons/fi';

const FloatingWhatsApp = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <a href="tel:+919876543210" className="flex items-center gap-3 rounded-full  bg-slate-900 px-4 py-3 text-white shadow-xl transition hover:bg-slate-600">
      <FiPhone /> Call Now
    </a>
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full bg-slate-900 px-4 py-3 text-white shadow-xl transition hover:bg-slate-800">
      <FiMessageCircle /> WhatsApp
    </a>
  </div>
);

export default FloatingWhatsApp;
