const express = require('express'),
    dashboardAPI = require('./controllers/dashboardRoutes');

module.exports = function(app) {
    // Initializing route groups
    const apiRoutes = express.Router();


    apiRoutes.get('/games', dashboardAPI.games);

    // Set url for API group routes
    app.use('/api/v1/', apiRoutes);
};