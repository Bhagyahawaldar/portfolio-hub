const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MySQL
require("./db");
// Project Routes
const projectRoutes = require("./routers/projectRoutes");
app.use("/api/projects", projectRoutes);
// Contact Routes
const contactRoutes = require("./routers/contactRoutes");
app.use("/api/contact", contactRoutes);
// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running");
});
// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});