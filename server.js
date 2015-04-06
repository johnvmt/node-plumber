var npm = require("npm");





npm.load({
	loaded: false
}, function (err) {
	// catch errors
	npm.commands.install(["node-plumber-ec2@git://github.com/johnvmt/node-plumber-ec2.git"], function (er, data) {
		if(er)
			console.log("ERR");
		else {
			console.log("SUCCESS");
			console.log(data);
			var ec2 = require('node-plumber-ec2');
			console.log(ec2);
//			var request = require("request");
		}
		//console.log("data", er, data);
		// log the error or data
	});
	npm.on("log", function (message) {
		// log the progress of the installation
		//console.log("log", message);
	});
});

/*
npm.load(myConfigObject, function (er) {
	if (er) return handlError(er)
	npm.commands.install(["some", "args"], function (er, data) {
		if (er) return commandFailed(er)
		// command succeeded, and data might have some info
	})
	npm.registry.log.on("log", function (message) { .... })
});
*/


