import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
  symptoms: { type: String, required: true },
  analysis: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Health = mongoose.model("Health", healthSchema);

export default Health;