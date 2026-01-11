CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- 1. Profile (Name, Email, Links)
CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    bio TEXT,
    github_link VARCHAR(255),
    linkedin_link VARCHAR(255),
    portfolio_link VARCHAR(255)
);

-- 2. Education
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution VARCHAR(100),
    degree VARCHAR(100),
    year VARCHAR(50)
);

-- 3. Work Experience
CREATE TABLE IF NOT EXISTS work (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(100),
    position VARCHAR(100),
    duration VARCHAR(50),
    description TEXT
);

-- 4. Projects (With tech_stack for filtering)
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    repo_link VARCHAR(255),
    demo_link VARCHAR(255),
    tech_stack VARCHAR(255) -- Stores "Python, React" etc.
);

-- 5. Skills
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50)
);