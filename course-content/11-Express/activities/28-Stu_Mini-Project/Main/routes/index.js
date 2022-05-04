const express = require('express');
const miniApp = require('express').Router();
// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics');

// const app = express();

miniApp.use('/tips', tipsRouter);
miniApp.use('/feedback', feedbackRouter);
miniApp.use('/diagnostics', diagnosticsRouter);

module.exports = miniApp;
