import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./lib/errorHandler";

dotenv.config();

const app = express();

// -- MIDDLEWARES --
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});