// controllers/ai.controller.js
import generateContent from "../services/ai.services.js";

export async function getReview(req, res) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const review = await generateContent(code);
    res.json({ review });
  } catch (err) {
    console.error("❌ AI Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
