var winston = require('winston'),
	config = require('../configuration');

function logger() {
	//console.log("filename=", config.get('logger:filename'));
	return winston.add(winston.transports.File, {
		filename: config.get('logger:filename'),
		maxsize: 1048576,
		maxFiles: 3,
		level: config.get('logger:level')
	});
}

module.exports = logger();