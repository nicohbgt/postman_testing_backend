const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const middleware = require('./middleware/auth.middleware');

app.use(express.json());
app.use('/auth', require('./router/auth.route'));

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.get("/dashboard", authMiddleware, (req, res) => {
    res.send("Welcome to the dashboard!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});