/*
***************************************************************************************

Create a frequency table from an input file containing on word per line. Example Input:

$ cat tags.txt
Dog
Cat
Dog
Dog

Example output:
$ node freq.js tags.txt
 Tag     Frequency
 Dog     3
 Cat     1

 Tips:
- Try to split the file contents by the newline character (\n)
- Use the readline module
([suggestions from StackOverflow](https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js))
****************************************************************************************
*/


/* Implement your solution here */
/**
 * @author Francesco Penasa
 */

const FILE = 2;

/**
 * read the file (Sync) passed as argument, and splits the file in lines
 * lines is a vector with the lines of the file.
 */
var lines = require('fs').readFileSync(process.argv[FILE], 'utf-8').split('\n');

/**
 * create a dictionary, write in the dictionary as key a line, 
 * if the key doesn't exist the value will be initiated as 1
 * else value incremented.
 */
var dict = {};
for (var i = 0; i<lines.length; i++){
	if (dict[lines[i]] == undefined)
		dict[lines[i]] = 1;
	else
		dict[lines[i]] += 1;
}



/**
 * print keys and values from the dictionary
 */
console.log("\n\nTag\t\tFrequency\n")
for (var key in dict){
	console.log( key + "\t\t"+ dict[key] );
}