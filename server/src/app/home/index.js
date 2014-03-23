exports.init = function(app) {
	app.get('/', home);
};

function home(req, res) {
	console.log("HOME");
	//it will serve the only entry point in the application (the index.html present in client project)
}