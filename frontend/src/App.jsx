import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Home from './pages/Home.jsx';
import Doctors from './pages/Doctors.jsx';
import Appointment from './pages/Appointment.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('kaadeTheme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('kaadeTheme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
