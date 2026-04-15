import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// CORS Configuration
const corsOptions = {
  origin: NODE_ENV === 'development' ? true : process.env.CORS_ORIGINS?.split(',') || false,
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'ItzGalaxy API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✓ ItzGalaxy API running on http://localhost:${PORT}`);
});
