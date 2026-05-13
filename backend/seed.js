import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { seedDoctors } from './utils/seeder.js';

dotenv.config();

const runSeed = async () => {
  try {
    await connectDB();
    await seedDoctors();
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

runSeed();