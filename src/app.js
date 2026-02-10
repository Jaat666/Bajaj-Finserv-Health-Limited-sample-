const express = require('express');
const cors = require('cors');
const { validateBfhlRequest } = require('./middleware/validation');
const BfhlController = require('./controllers/bfhlController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Routes
app.post('/bfhl', validateBfhlRequest, BfhlController.handlePost);
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1,
        message: "POST /bfhl is available for processing requests"
    });
});
app.get('/health', BfhlController.handleHealth);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Route not found"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Internal server error",
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

module.exports = app;