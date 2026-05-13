import Doctor from '../models/Doctor.js';

const doctors = [
  {
    name: 'Dr. Arjun Mehta',
    specialization: 'Oncology Specialist',
    experience: '12 Years Experience',
    image: '/doctor-arjun.svg',
    description: 'Compassionate oncologist focused on precision care and empathetic patient support.',
    availableSlots: [
      { date: '2026-05-18', times: ['09:00 AM', '11:00 AM', '02:00 PM'] },
      { date: '2026-05-19', times: ['10:30 AM', '01:00 PM', '03:30 PM'] },
    ],
  },
  {
    name: 'Dr. Priya Sharma',
    specialization: 'Radiation Oncologist',
    experience: '10 Years Experience',
    image: '/doctor-priya.svg',
    description: 'Expert in modern radiation therapy with excellent patient communication.',
    availableSlots: [
      { date: '2026-05-18', times: ['09:30 AM', '12:00 PM', '04:00 PM'] },
      { date: '2026-05-20', times: ['10:00 AM', '01:30 PM', '03:00 PM'] },
    ],
  },
  {
    name: 'Dr. Rahul Verma',
    specialization: 'Surgical Oncologist',
    experience: '15 Years Experience',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80',
    description: 'Skilled surgical oncologist delivering safe, innovative cancer procedures.',
    availableSlots: [
      { date: '2026-05-19', times: ['09:00 AM', '11:30 AM', '02:30 PM'] },
      { date: '2026-05-21', times: ['10:00 AM', '12:00 PM', '04:30 PM'] },
    ],
  },
  {
    name: 'Dr. Sneha Reddy',
    specialization: 'Cancer Care Specialist',
    experience: '8 Years Experience',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    description: 'Dedicated cancer care specialist empowering recovery with holistic plans.',
    availableSlots: [
      { date: '2026-05-18', times: ['10:00 AM', '01:00 PM', '03:30 PM'] },
      { date: '2026-05-20', times: ['09:30 AM', '12:30 PM', '02:30 PM'] },
    ],
  },
];

export const seedDoctors = async () => {
  const count = await Doctor.countDocuments();
  if (count === 0) {
    await Doctor.create(doctors);
    console.log('Seed data created for doctors');
  }
};
