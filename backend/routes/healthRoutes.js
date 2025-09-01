import express from "express";
import { analyzeSymptoms } from "../controllers/healthController.js";

const router = express.Router();

// POST /api/health/analyze
router.post("/analyze", analyzeSymptoms);

export default router;