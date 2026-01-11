const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "http://localhost";

const authMiddleware = require("./middleware/auth.middleware");

app.use(express.json());

// ROUTES
app.use("/auth", require("./routes/auth.routes"));
app.use("/tasks", require("./routes/task.routes"));

// ROOT
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// DASHBOARD (PROTECTED)
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to the dashboard!");
});

// SERVER LISTEN
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Server is running");
  console.log(`👉 Base URL      : ${HOST}:${PORT}`);
  console.log(`👉 Health Check  : ${HOST}:${PORT}/`);
  console.log(`👉 Register      : ${HOST}:${PORT}/auth/register`);
  console.log(`👉 Login         : ${HOST}:${PORT}/auth/login`);
  console.log(`👉 Dashboard     : ${HOST}:${PORT}/dashboard`);
  console.log(`👉 Tasks CRUD    : ${HOST}:${PORT}/tasks`);
  console.log("=================================");
});