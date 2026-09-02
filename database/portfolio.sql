-- ==========================================
-- PERSONAL PORTFOLIO DATABASE
-- ==========================================
-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
-- Select database
USE portfolio_db;
-- ==========================================
-- PROJECTS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    technologies VARCHAR(255),
    github_link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- ==========================================
-- CONTACTS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- ==========================================
-- SAMPLE PROJECT DATA
-- ==========================================
INSERT INTO projects
(title, description, technologies, github_link)
VALUES
(
    'Smart Crowd Detection System',
    'An AI-based system for detecting and monitoring crowd density using computer vision.',
    'Python, YOLOv8, OpenCV, Flask, MySQL',
    'https://github.com/'
);
INSERT INTO projects
(title, description, technologies, github_link)
VALUES
(
    'Campus Energy Monitoring System',
    'An IoT-based system for monitoring and managing electrical energy consumption.',
    'Arduino, ESP8266, PZEM, IoT',
    'https://github.com/'
);
INSERT INTO projects
(title, description, technologies, github_link)
VALUES
(
    'Online Rating System',
    'A web application for collecting and managing user ratings.',
    'MongoDB, Express.js, React.js, Node.js',
    'https://github.com/'
);
-- ==========================================
-- CHECK DATA
-- ==========================================
SELECT * FROM projects;
SELECT * FROM contacts;