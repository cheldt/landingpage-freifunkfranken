/*
 * Simple static Webserver
 * 
 * History:
 * 28.03.13 mojoaxel: created file
 */
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname));
app.listen(8080);
