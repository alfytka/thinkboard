import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notes-routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on Port: ", PORT);
});
