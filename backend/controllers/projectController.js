const db = require("../db");
// Get all projects
const getProjects = (req, res) => {
    const sql = "SELECT * FROM projects";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching projects:", err);
            return res.status(500).json({
                message: "Failed to fetch projects"
            });
        }
        res.json(results);
    });
};
// Add a project
const addProject = (req, res) => {
    const {
        title,
        description,
        technologies,
        github_url,
        live_url
    } = req.body;
    const sql = `
        INSERT INTO projects
        (title, description, technologies, github_url, live_url)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [ title,description,technologies,github_url,live_url
        ],
        (err, result) => {
            if (err) {
                console.error("Error adding project:", err);
                return res.status(500).json({
                    message: "Failed to add project"
                });
            }
            res.status(201).json({
                message: "Project added successfully",
                projectId: result.insertId
            });
        }
    );
};
module.exports = {
    getProjects,
    addProject
};