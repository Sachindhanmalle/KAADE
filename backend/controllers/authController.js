import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '12h' });
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ token: generateToken(user._id), user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Authentication failed', error: error.message });
  }
};

export const createAdminUser = async () => {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) return;
  const exists = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (exists) return;
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  await User.create({ name: 'KAADE Admin', email: process.env.ADMIN_EMAIL, password: hashedPassword });
};
