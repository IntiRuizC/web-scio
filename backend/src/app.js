const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const contactRoutes = require('./routes/contact');

const app = express();

// Configure CORS
app.use(cors({
    origin: process.env.NODE_ENV === 'development'
      ? ['http://localhost:5173', 'http://127.0.0.1:5173'] 
      : process.env.ALLOWED_ORIGINS?.split(',') || 'https://sciocorp.org'
  }));

// Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Catch-all 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === 'production'
            ? 'Internal server error'
            : err.message
    });
});

module.exports = app;