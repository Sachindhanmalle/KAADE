import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
  port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 2525,
  auth: {
    user: process.env.EMAIL_USER || 'your-mailtrap-user',
    pass: process.env.EMAIL_PASS || 'your-mailtrap-pass',
  },
});

export const sendAppointmentEmail = async (recipient, appointmentId, doctorName, date, time) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'contact@kaadehospital.com',
      to: recipient,
      subject: `Appointment confirmation from KAADE Hospital`,
      html: `<h2>Appointment Confirmed</h2>
        <p>Thank you for choosing KAADE Hospital.</p>
        <p><strong>Appointment ID:</strong> ${appointmentId}</p>
        <p><strong>Doctor:</strong> ${doctorName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We look forward to welcoming you.</p>`,
    });
  } catch (error) {
    console.warn('Email send failed:', error.message);
  }
};
