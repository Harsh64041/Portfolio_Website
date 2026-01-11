const mysql = require('mysql2/promise');
require('dotenv').config();

async function seed() {
    console.log("⏳ Connecting to Database...");
    
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD ?? '',
        port: process.env.DB_PORT || 3307, 
        multipleStatements: true 
    });

    console.log("✅ Connected! Updating Projects...");

    const sql = `
        CREATE DATABASE IF NOT EXISTS portfolio_db;
        USE portfolio_db;

        -- 1. DROP OLD TABLES
        DROP TABLE IF EXISTS profile;
        DROP TABLE IF EXISTS education;
        DROP TABLE IF EXISTS work;
        DROP TABLE IF EXISTS projects;
        DROP TABLE IF EXISTS skills;

        -- 2. CREATE NEW TABLES
        CREATE TABLE profile (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            role VARCHAR(100),
            email VARCHAR(100),
            bio TEXT,
            github_link VARCHAR(255),
            linkedin_link VARCHAR(255)
        );

        CREATE TABLE education (
            id INT AUTO_INCREMENT PRIMARY KEY,
            institution VARCHAR(100),
            degree VARCHAR(100),
            year VARCHAR(50)
        );

        CREATE TABLE work (
            id INT AUTO_INCREMENT PRIMARY KEY,
            company VARCHAR(100),
            position VARCHAR(100),
            duration VARCHAR(50),
            description TEXT
        );

        CREATE TABLE projects (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100),
            description TEXT,
            repo_link VARCHAR(255),
            demo_link VARCHAR(255),
            tech_stack VARCHAR(255)
        );

        CREATE TABLE skills (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            category VARCHAR(50)
        );

        -- 3. SEED DATA
        
        -- Profile
        INSERT INTO profile (name, role, email, bio, github_link, linkedin_link) 
        VALUES (
            'Harsh Vardhan Sharma', 
            'Information Technology Student', 
            'harshvardhans809@gmail.com', 
            'UG IV Year student at SGSITS, Indore. Enthusiastic about System Design, Cloud Computing (AWS), and Full Stack Development. Silver Badge on HackerRank (C++).', 
            'https://github.com/Harsh64041', 
            'https://linkedin.com/in/harsh-vardhan-sharma'
        );

        -- Education
        INSERT INTO education (institution, degree, year) VALUES 
        ('SGSITS, Indore', 'B.Tech in Information Technology (CGPA: 7.14)', '2026'),
        ('Mother Teressa School', 'Class 12th (MP Board) - 77.6%', '2022'),
        ('Mother Teressa School', 'Class 10th (MP Board) - 90%', '2020');

        -- Experience
        INSERT INTO work (company, position, duration, description) VALUES 
        ('Nature Club', 'Secretary', '2023 - 2024', 'Led activities and coordinated volunteers to enhance community involvement in conservation efforts.'),
        ('Nature Club', 'Volunteer', '2022 - 2023', 'Assisted with environmental projects and events.'),
        ('Cricket Regionals', 'Player', '2020 - 2021', 'Participated in Cricket Regionals, demonstrating teamwork and sportsmanship.');

        -- Projects (REMOVED Custom Linux Shell)
        INSERT INTO projects (title, description, repo_link, demo_link, tech_stack) VALUES 
        ('GEO Sentiment Analyzer', 'Full-stack cloud-native app analyzing global news sentiment using GDELT API. Hosted on AWS.', 'https://github.com/Harsh64041/Geo-Sentiment-Analyzer', '', 'Node.js, AWS, React.js'),
        ('Face Recognition Attendance', 'Automated attendance system using Python & OpenCV. Features real-time video processing.', 'https://github.com/Harsh64041/face_recognition_system', '', 'Python, OpenCV, MySQL'),
        ('WeatherVue', 'Weather application displaying real-time temperature, highs, and lows for any city.', 'https://github.com/Harsh64041/CBTC', '', 'Web Development, API');

        -- Skills
        INSERT INTO skills (name, category) VALUES 
        ('C++', 'Language'), 
        ('Java', 'Language'), 
        ('Python', 'Language'), 
        ('Data Structures', 'Core'),
        ('AWS', 'Cloud'), 
        ('SQL', 'Database'), 
        ('React.js', 'Frontend'), 
        ('Node.js', 'Backend');
    `;

    await connection.query(sql);
    console.log("🎉 Database Updated! Custom Linux Shell Removed.");
    process.exit();
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});