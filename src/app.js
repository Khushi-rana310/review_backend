import express from 'express';
import aiRoutes from './routes/ai.routes.js';  // include .js extension with ES modules
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
  // Remove second res.send('hello world') — can only send once
});

app.use('/ai', aiRoutes);

export default app;
