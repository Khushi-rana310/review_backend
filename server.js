//require('dotenv').config()
//const app = require("./src/app");

//app.listen(3000,()=>{
    //console.log('server is running on http://localhost:3000')
//});


import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow requests from your frontend on Vercel
app.use(cors({
  origin: ["https://code-reviewer-eight.vercel.app/"], // replace with actual Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
