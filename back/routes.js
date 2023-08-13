const express = require('express');
const router = express.Router();
const projectController = require('./controllers/projectController');

router.get('/projects', projectController.getProjects);
// Agrega más rutas según sea necesario

module.exports = router;
