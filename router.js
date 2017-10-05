const express = require('express');

module.exports = function(app) {
    // Initializing route groups
    const apiRoutes = express.Router();


    apiRoutes.get('/gamesList', function(req, res) {
        res.json({ "result": "JSON OBJECT FOR GAMES" });
    });

    // Set url for API group routes
    app.use('/api/v1/', apiRoutes);
};