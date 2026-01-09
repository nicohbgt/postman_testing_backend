const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const authMiddleware = require('./middleware/auth.middleware');

app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/tasks', require('./routes/task.routes'));

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to the dashboard!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
