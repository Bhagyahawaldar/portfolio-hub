const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhagya@5090",
    database: "portfolio_db",
    port: 3306
});
db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }
    console.log("MySQL Database Connected Successfully");
});
module.exports = db;