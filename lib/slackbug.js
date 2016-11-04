const request = require('request');

exports.handleRequest = (event, callback) => {
	/*
	For sC board
	
    https://api.trello.com/1/cards
    	?key=2fc062d3472c04cc41aecb6cf31db6cf
    	&token=cecfdfdf2374dd64736a15b61946477b3b6bd21616240d3c7392df14377d32b4
    	&name=test+card
    	&idList=5784db06979c10df2cda7760

    For Test Board
	
	https://api.trello.com/1/cards
		?key=2fc062d3472c04cc41aecb6cf31db6cf
		&token=cecfdfdf2374dd64736a15b61946477b3b6bd21616240d3c7392df14377d32b4
		&name=${params.text}
		&idList=581b362b882f4680be45bdcc

	*/
	var scBoard   = `https://api.trello.com/1/cards?key=2fc062d3472c04cc41aecb6cf31db6cf&token=cecfdfdf2374dd64736a15b61946477b3b6bd21616240d3c7392df14377d32b4&name=${event.name}&idList=5784db06979c10df2cda7760`;
	var testBoard = `https://api.trello.com/1/cards?key=2fc062d3472c04cc41aecb6cf31db6cf&token=cecfdfdf2374dd64736a15b61946477b3b6bd21616240d3c7392df14377d32b4&name=${event.name}&idList=581b362b882f4680be45bdcc`;

	request({
		url: testBoard,
		method: 'POST',
		}, function(error, response, body) {
			if (error) {
				console.log(error);
			} else {
			console.log(response.statusCode, body);
			callback(null, response); 
		}
	});
};