// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock Users
const users = [
  { email: "karthi@gmail.com", password: "12345" },
  { email: "admin@gmail.com", password: "admin123" }
];

// Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// Signup Route (Mock)
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;
  const userExists = users.find(u => u.email === email);

  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ email, password }); // Add to mock array
  return res.status(201).json({ message: "Signup successful" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
