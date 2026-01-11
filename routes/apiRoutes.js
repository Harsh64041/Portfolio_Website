const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolioController');

// --- GET Endpoints (Read) ---
router.get('/health', (req, res) => res.status(200).json({ status: 'UP' })); // Req 1.c
router.get('/profile', controller.getProfile);
router.get('/projects', controller.getProjects); // Handles ?skill=python and ?q=search
router.get('/skills', controller.getSkills);

// --- POST/PUT Endpoints (Create/Update) ---
router.put('/profile', controller.updateProfile); // Update your bio
router.post('/projects', controller.createProject); // Add a new project

module.exports = router;