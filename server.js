// server.js
import 'dotenv/config';
import express from "express";
import cors from "cors";
import aiRouter from "./routes/ai.routes.js"; // adjust path if needed

const app = express();

// ✅ CORS: allow only your Vercel frontend
app.use(cors({
  origin: ["https://review-frontend-sand.vercel.app/"], // replace with your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Parse JSON requests
app.use(express.json());

// ✅ API routes
app.use("/api", aiRouter);

// ✅ Keep server alive on Render
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
