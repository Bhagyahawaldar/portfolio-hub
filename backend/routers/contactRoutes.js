const express = require("express");
const router = express.Router();
const db = require("../db");
// POST contact message
router.post("/", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    const sql = `
        INSERT INTO messages (name, email, message)
        VALUES (?, ?, ?)
    `;
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("Error saving message:", err);
            return res.status(500).json({
                message: "Failed to save message"
            });
        }
        res.status(201).json({
            message: "Message sent successfully"
        });
    });
});
module.exports = router;