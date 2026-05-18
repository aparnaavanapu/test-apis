// Hello Aparna API using Express.js

const express = require("express");

const app = express();
const PORT = 3000;

// Hello Aparna API
app.get("/", (req, res) => {
  res.json({
    message: "Hello from backend2"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});