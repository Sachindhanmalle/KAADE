import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchDoctors = async () => {
  const { data } = await api.get('/doctors');
  return data;
};

export const bookAppointment = async (payload) => {
  const { data } = await api.post('/appointments', payload);
  return data;
};

export const adminLogin = async (payload) => {
  const { data } = await api.post('/auth/login', payload);
  return data;
};

export const fetchAppointments = async (token) => {
  const { data } = await api.get('/appointments', { headers: { Authorization: `Bearer ${token}` } });
  return data;
};

export const updateAppointmentStatus = async (id, status, token) => {
  const { data } = await api.patch(`/appointments/${id}/status`, { status }, { headers: { Authorization: `Bearer ${token}` } });
  return data;
};
