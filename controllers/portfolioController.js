const db = require('../config/db');

// --- READ OPERATIONS (GET) ---

// 1. Get Complete Profile (Profile + Education + Work)
exports.getProfile = async (req, res) => {
    try {
        const [profile] = await db.query('SELECT * FROM profile LIMIT 1');
        const [education] = await db.query('SELECT * FROM education');
        const [work] = await db.query('SELECT * FROM work');
        
        // Combine into one JSON response
        res.json({
            ...profile[0],
            education: education,
            work: work
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Get Projects with Search & Filter (Req 1.b)
exports.getProjects = async (req, res) => {
    try {
        const { q, skill } = req.query; // Capture ?q=... and ?skill=...
        let sql = 'SELECT * FROM projects';
        let params = [];
        let conditions = [];

        // Search Logic (Title or Description)
        if (q) {
            conditions.push('(title LIKE ? OR description LIKE ?)');
            params.push(`%${q}%`, `%${q}%`);
        }

        // Skill Filter Logic
        if (skill) {
            conditions.push('tech_stack LIKE ?');
            params.push(`%${skill}%`);
        }

        if (conditions.length > 0) {
            sql += ' WHERE ' + conditions.join(' AND ');
        }

        const [rows] = await db.query(sql, params);
        res.json({ projects: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. Get Skills
exports.getSkills = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM skills');
        res.json({ skills: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// --- WRITE OPERATIONS (POST/PUT) ---

// 4. Update Profile (Req 1.a - "create/read/update")
exports.updateProfile = async (req, res) => {
    try {
        const { name, email, bio, github, linkedin } = req.body;
        // Upsert: Updates if ID=1 exists, inserts if not
        const sql = `
            INSERT INTO profile (id, name, email, bio, github_link, linkedin_link) 
            VALUES (1, ?, ?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE name=?, email=?, bio=?, github_link=?, linkedin_link=?`;
        
        await db.query(sql, [name, email, bio, github, linkedin, name, email, bio, github, linkedin]);
        res.json({ message: 'Profile updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 5. Add New Project
exports.createProject = async (req, res) => {
    try {
        const { title, description, repo_link, tech_stack } = req.body;
        const sql = 'INSERT INTO projects (title, description, repo_link, tech_stack) VALUES (?, ?, ?, ?)';
        await db.query(sql, [title, description, repo_link, tech_stack]);
        res.status(201).json({ message: 'Project created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};