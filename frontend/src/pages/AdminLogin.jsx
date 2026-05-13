import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../services/api.js';
import { toast } from '../components/toastHelper.js';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token } = await adminLogin(credentials);
      localStorage.setItem('kaadeAdminToken', token);
      toast('Admin login successful', 'success');
      navigate('/admin/dashboard');
    } catch (error) {
      toast(error.response?.data?.message || 'Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 pb-24 pt-20">
      <div className="section-card space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Admin access</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Login to manage appointments and doctors.</h1>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input name="email" type="email" value={credentials.email} onChange={handleChange} placeholder="admin@kaade.com" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-emerald-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
            <input name="password" type="password" value={credentials.password} onChange={handleChange} placeholder="••••••••" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-emerald-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100" />
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-full bg-emerald-700 px-6 py-3 text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
