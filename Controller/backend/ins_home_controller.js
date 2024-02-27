// insHome.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the React UI for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const insHomeHandler = (req, res) => {
    // Your logic for /instructor-home goes here
    res.send("This is the instructor home page!");
  };
  
  module.exports = insHomeHandler;