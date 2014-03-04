/*jshint devel:true, node:true, strict:false */
/*global require:true */

var express = require("express"),
	config = require('./lib/configuration'),
	notFound = require('./lib/middleware/notFound'),
	path = require("path"),
	http = require("http"),
	app = express();

var server;
var setting;

app.configure(function() {
	app.use(express.logger({ immediate: true, format: 'dev' })); //short,tiny,dev
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express['static'](path.join(__dirname, 'public')));
});

server = http.createServer(app);

require('./app/home').init(app);

app.get('/heartbeat',  function(req, res) {
	res.json(200, 'OK');
});
app.use(notFound.index);

if (!module.parent) {
	//console.log("config", config.get);
    var port = process.env.PORT || 8000;
    server.listen(port);
    //server.listen(config.get('express:port'));
	console.log("CodingShack Server listening on port %d within %s environment", port, app.settings.env);
}

module.exports = app;