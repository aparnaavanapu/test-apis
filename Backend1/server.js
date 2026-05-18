// Simple Hello World API using Express.js

const express = require("express");

const app = express();
const PORT = 3000;

// Hello World API
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});