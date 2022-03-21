// Dependencies
const path = require("path");

// Routing

module.exports = function (app){

    // HTML GET Requests
    // Below code handles when users 'visit' a page.
    // In each of the below cases the user is shown an HTML page of content

    
    app.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};