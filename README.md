# KAADE Hospital

Modern full-stack appointment booking platform for KAADE Hospital with premium healthcare design, React frontend, Node/Express backend, and MongoDB.

## Features

- Home, About, Doctors, Appointment, Contact pages
- Appointment booking with doctor selection and slot booking
- Admin login and dashboard for appointment approval
- MongoDB persistence and JWT authentication
- Tailwind CSS styling, animations, responsive layout
- Floating WhatsApp and contact actions

## Folder structure

- `frontend/` - React + Vite application
- `backend/` - Express API, Mongoose models, JWT auth

## Setup

### Backend

1. Navigate to `backend/`
2. Copy `.env.example` to `.env`
3. Install dependencies: `npm install`
4. Seed sample doctors: `npm run seed`
5. Start server: `npm run dev`

### Frontend

1. Navigate to `frontend/`
2. Copy `.env.example` to `.env`
3. Install dependencies: `npm install`
4. Start app: `npm run dev`

## Notes

- Admin login uses credentials from `backend/.env`
- Use API URL in `frontend/.env` if backend is hosted elsewhere
- Email service uses environment SMTP settings
