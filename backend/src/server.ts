import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import moduleRoutes from "./routes/module.routes.js";
import kitRoutes from "./routes/kit.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import kitModuleRoutes from "./routes/kitModule.routes.js";
import assignmentRoutes from "./routes/assignment.routes.js";
import sessionAttendeeRoutes from "./routes/sessionAttendee.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import statRoutes from "./routes/stats.routes.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { errorHandler } from "./lib/errorHandler.js";

// -- APP --
// Load the backend env reliably, independent of `process.cwd()`.
dotenv.config({
  path: fileURLToPath(new URL("../.env", import.meta.url)),
  override: true,
});
const app = express();

// -- MIDDLEWARES --
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(apiLimiter); // Global rate limiter

// -- ROUTES -- 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/modules", moduleRoutes);
app.use("/api/v1/kits", kitRoutes);
app.use("/api/v1/sessions", sessionRoutes);
app.use("/api/v1/assignments", assignmentRoutes);
app.use("/api/v1/kits/:kitId/modules", kitModuleRoutes);
app.use("/api/v1/sessions/:sessionId/attendees", sessionAttendeeRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/stats", statRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running @ PORT:${PORT}`);
});