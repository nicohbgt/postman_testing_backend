const users = require("../data/users");

// REGISTER
exports.register = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = {
    id: Date.now(),
    username,
    email,
    password
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
    userId: newUser.id
  });
};

// LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    user => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    token: "dummy-token-12345",
    userId: user.id
  });
};