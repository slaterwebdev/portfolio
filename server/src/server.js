import express from "express";
import cors from "cors";
import path from "path";
import pageRouter from "./pageRouter.js";
import formRouter from "./formRouter.js";

const PORT = process.env.PORT;
const CLIENT = process.env.CLIENT_URL;
const app = express();

const middlewares = [
  { handler: cors({ origin: CLIENT }) },
  { handler: express.json() },
  {
    path: "/images",
    handler: express.static(path.join(process.cwd(), "public/images"), {
      maxAge: "1d",
      etag: true,
    }),
  },
  {
    path: "/files",
    handler: express.static(path.join(process.cwd(), "public/files")),
  },
  { path: "/api/pages", handler: pageRouter },
  { path: "/api/form", handler: formRouter },
];

middlewares.forEach(({ path, handler }) => app.use(path || "", handler));

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
