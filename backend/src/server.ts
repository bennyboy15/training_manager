import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import employeeRoutes from "./routes/employee.routes";
import moduleRoutes from "./routes/module.routes";
import kitRoutes from "./routes/kit.routes";
import sessionRoutes from "./routes/session.routes";
import kitModuleRoutes from "./routes/kitModule.routes";
import assignmentRoutes from "./routes/assignment.routes";
import { errorHandler } from "./lib/errorHandler";

dotenv.config();
const app = express();

// -- MIDDLEWARES --
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// -- ROUTES -- 
app.use("/users", userRoutes);
app.use("/employees", employeeRoutes);
app.use("/modules", moduleRoutes);
app.use("/kits", kitRoutes);
app.use("/sessions", sessionRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/kitModules", kitModuleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running @ PORT:${PORT}`);
});