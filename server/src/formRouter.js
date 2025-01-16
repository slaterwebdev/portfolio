import express from "express";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const formRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const formDataFilePath = path.join(__dirname, "./formData.json");

const readFormDataFile = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, "utf-8");
    if (!rawData.trim()) {
      return [];
    }
    return JSON.parse(rawData);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(filePath, JSON.stringify([], null, 2));
      return [];
    }
    throw error;
  }
};

formRouter.post("", async (req, res) => {
  try {
    const formData = req.body;
    const existingData = await readFormDataFile(formDataFilePath);
    existingData.push(formData);
    await fs.writeFile(formDataFilePath, JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

export default formRouter;
