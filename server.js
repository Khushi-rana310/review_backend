//require('dotenv').config()
//const app = require("./src/app");

//app.listen(3000,()=>{
    //console.log('server is running on http://localhost:3000')
//});




//import 'dotenv/config';
//import express from "express";
//import cors from "cors";

//const app = express();

// ✅ Allow requests from your frontend on Vercel
//app.use(cors({
//  origin: ["https://code-reviewer-eight.vercel.app/"], // replace with actual Vercel URL
//  methods: ["GET", "POST", "PUT", "DELETE"],
//  credentials: true
//}));

//app.use(express.json());




import 'dotenv/config';
import express from "express";
import cors from "cors";
import aiRouter from "./routes/ai.routes.js"; // adjust path if needed

const app = express();

// CORS: allow requests from your frontend
app.use(cors({
  origin: ["https://your-frontend.vercel.app"], // replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", aiRouter);

// Render requires a PORT to keep server alive
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
