var nconf = require('nconf');

nconf.argv()
	 .env("_");

var environment = nconf.get("NODE:ENV") || "development";
nconf.file(environment, "config/" + environment + ".json");
nconf.file("default", "config/default.json");

//console.log("nconf", nconf);

function get(key) {
	return nconf.get(key);
}

module.exports = {
	get: get
};