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
import { errorHandler } from "./lib/errorHandler";

// -- APP --
dotenv.config();
const app = express();

// -- MIDDLEWARES --
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// -- ROUTES -- 
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/employees", employeeRoutes);
app.use("/modules", moduleRoutes);
app.use("/kits", kitRoutes);
app.use("/sessions", sessionRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/kitModules", kitModuleRoutes);
app.use("/sessionAttendees", sessionAttendeeRoutes);
app.use("/notifications", notificationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running @ PORT:${PORT}`);
});