import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const pageRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pageContentDir = path.resolve(__dirname, "pageContent");
const pageContent = {};

const loadPageContent = async () => {
  const files = await fs.readdir(pageContentDir);
  for (const file of files) {
    const pageName = path.basename(file, ".js");
    const { default: moduleContent } = await import(
      `file://${path.join(pageContentDir, file)}`
    );
    pageContent[pageName] = moduleContent;
  }
};

await loadPageContent();

pageRouter.get("/:page", (req, res) => {
  const { page } = req.params;
  const content = pageContent[page];
  if (content) {
    res.status(200).json(content);
  } else {
    res.status(404).json({ error: "Page not found" });
  }
});

export default pageRouter;
