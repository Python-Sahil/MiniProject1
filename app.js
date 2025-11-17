const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000; // you can choose another port if needed

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Import JSON data
const items = require("./data/items.json");

// API route to return JSON data
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Fallback route (optional) to serve index if unknown route
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
