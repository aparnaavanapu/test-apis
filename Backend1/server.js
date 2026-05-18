// Simple Hello World API using Express.js

const express = require("express");

const app = express();
const PORT = 3000;

// Hello World API
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Backend1"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});