exports.init = function(app) {
	app.get('/', home);
};

function home(req, res) {
	console.log("HOME");
}