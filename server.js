const express = require("express");

const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

// API 1
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello World"
  });
});

// API 2
app.get("/aparna", (req, res) => {
  res.json({
    message: "Hello Aparna"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});