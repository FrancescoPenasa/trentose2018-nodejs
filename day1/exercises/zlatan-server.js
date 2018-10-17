/*
Can you create a service that tells Zlatan jokes? 
You can use a format similar to that of the Internet Chuck Norris Database. 
You can store your jokes in an array, in a file, or simply reuse the Chuck Norris Service.
*/
/* Implement your solution here */

var http = require('http');
var port = 3000;

var url = "http://api.icndb.com/jokes/random?firstName=Zlatan&lastName=Ibrahimovic";
var obj;

//get jokes
http.get(url, function (resp) {
	var data = "";

	// We receive the response data in a stream, so here
	// we specify what to do with each chunk we receive
	resp.on("data", function (chunk) {
		data += chunk;
	});

	// We specify what to do when we finish receiving the
	// stream of data.
	resp.on("end", function () {
		// We receive the content as "text" and print it
		obj = JSON.parse(data)
	});
}).on("error", function (err) {
	console.log("Error: " + err.message);
});

//server
var requestHandler = function(request, response) {
	console.log(request.url);
	response.end(obj.value.joke);
  }

var server = http.createServer(requestHandler);
server.listen(port);