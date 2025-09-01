import Health from "../models/healthModel.js";
import axios from "axios";

export const analyzeSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms) {
      return res.status(400).json({ message: "Symptoms are required" });
    }

    // Mock AI call (you can integrate with OpenAI, Gemini, or other APIs)
    const aiResponse = `Based on your symptoms: "${symptoms}", you may need further consultation. This is just a preliminary analysis.`;

    // Save to DB
    const record = await Health.create({
      symptoms,
      analysis: aiResponse,
    });

    res.status(200).json(record);
  } catch (error) {
    console.error("❌ Error analyzing symptoms:", error);
    res.status(500).json({ message: "Server error" });
  }
};