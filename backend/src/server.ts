import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import employeeRoutes from "./routes/employee.routes";
import moduleRoutes from "./routes/module.routes";
import kitRoutes from "./routes/kit.routes";
import sessionRoutes from "./routes/session.routes";
import kitModuleRoutes from "./routes/kitModule.routes";
import assignmentRoutes from "./routes/assignment.routes";
import sessionAttendeeRoutes from "./routes/sessionAttendee.routes";
import notificationRoutes from "./routes/notification.routes";
import statRoutes from "./routes/stats.routes";
import { apiLimiter } from "./middleware/rateLimiter";
import { errorHandler } from "./lib/errorHandler";

// -- APP --
dotenv.config();
const app = express();

// -- MIDDLEWARES --
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(apiLimiter); // Global rate limiter

// -- ROUTES -- 
app.use("api/v1/auth", authRoutes);
app.use("api/v1/users", userRoutes);
app.use("api/v1/employees", employeeRoutes);
app.use("api/v1/modules", moduleRoutes);
app.use("api/v1/kits", kitRoutes);
app.use("api/v1/sessions", sessionRoutes);
app.use("api/v1/assignments", assignmentRoutes);
app.use("api/v1/kits/:kitId/modules", kitModuleRoutes);
app.use("api/v1/sessions/:sessionId/attendees", sessionAttendeeRoutes);
app.use("api/v1/notifications", notificationRoutes);
app.use("api/v1/stats", statRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running @ PORT:${PORT}`);
});