var assert = require("chai").assert;
var expect = require("chai").expect;
var slackbug = require("../lib/slackbug.js");


var event = {};

event.body = {
	name: "testName"
};


describe("slackBug", function () { 

	it("exports handleRequest", function () { 
		assert.typeOf(slackbug.handleRequest, "function"); 
	});

	// finish this test and more...
	it("Should get a 200 response when making a request", function (done) {
		slackbug.handleRequest(event.body, function(data1, response) {			
			expect(response.statusCode).to.be.equal(200);
			done();
		});
	});
	
});