'use strict';

var slackBug = require("./lib/slackbug.js");

exports.handler = function (event, context) {
	slackBug.handleRequest(event, context.done);
}