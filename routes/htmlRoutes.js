const path = require("path");
module.exports = function (app){
    app.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
