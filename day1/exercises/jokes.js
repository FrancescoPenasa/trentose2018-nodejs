/*
3. **Random joke**: 
Implement a script *jokes.js* that returns a random joke 
from the *The Internet Chuck Norris database*. 

The documentation specifies:
// To get a random joke, invoke:
http://api.icndb.com/jokes/random

// If you want to change the name of "Chuck Norris", 
// specify the firstName and lastName parameters:
http://api.icndb.com/jokes/random?firstName=John&lastName=Doe
*/



/* Implement your solution here */
/**
 * @author Francesco Penasa
 */


var http = require('http');
var firstName = "";
var lastName = "";

if (process.argv.length > 2 )
	firstName = process.argv[2];
if (process.argv.length > 3)
	lastName = process.argv[3];

var url = "http://api.icndb.com/jokes/random?firstName="+firstName+"&lastName="+lastName;

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
		var obj = JSON.parse(data)
		console.log("\n\n"+obj.value.joke+"\n\n");
		//console.log(data);
	});

	//error
}).on("error", function (err) {
	console.log("Error: " + err.message);
});