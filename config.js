var config = {};

config.platform = {
	npm: "node-plumber-ec2@https://github.com/johnvmt/node-plumber-ec2.git"
};

config.platform.params = require("./ec2-creds.json");

module.exports = config;
