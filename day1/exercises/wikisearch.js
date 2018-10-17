/**
 * Wiki pages: 
 * Implement a script that given an input term, 
 * search for the (top 5) matching Wiki pages. 
 *
 * For example:
$ node wikisearch.js "Albert Einstein"

Albert Einstein
Hans Albert Einstein
Outline of Albert Einstein
Albert Einstein's brain
Einstein family


 * The documentation of the Wikipedia API suggests the following call:
 * https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&format=json
 * which has the following output format. You elements to display are in the query.search array.

{
   "batchcomplete":"",
   "continue":{  
      "sroffset":10,
      "continue":"-||"
   },
   "query":{  
      "searchinfo":{  
         "totalhits":5166
      },
      "search":[  
         {  
            "ns":0,
            "title":"Albert Einstein"
         },
      ]
   }
}
 */



/* Implement your solution here */

/**
 * @author Francesco Penasa 
 */

 //std shit
const N_RESULTS = 5;
var https = require('https');

//take the shit
var search_w = "";
for (var i = 2; i < process.argv.length-1; i++){
	search_w += process.argv[i] + "%20";
}
search_w += process.argv[process.argv.length-1];

//put in the url
var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+ search_w +"&format=json";

//get from the url
https.get(url, function (resp) {
	var data = "";

	// We receive the response data in a stream, so here
	// we specify what to do with each chunk we receive
	resp.on("data", function (chunk) {
		data += chunk;
	});

	// We specify what to do when we finish receiving the
	// stream of data.
	resp.on("end", function () {
		// We receive the content as "JSON", 
		// parse it and print the query.search.title of the first 5 results. 
		var obj = JSON.parse(data);
		for (var i=0 ;i<N_RESULTS; i++)
			console.log+obj.query.search[i].title+"\n");
	});

	//error
}).on("error", function (err) {
	console.log("Error: " + err.message);
});
