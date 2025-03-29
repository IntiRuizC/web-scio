const express = require('express');
const contactController = require('../controllers/contact');

const router = express.Router();

// POST /api/contact - Submit a contact form
router.post('/', contactController.submitContactForm);

module.exports = router;