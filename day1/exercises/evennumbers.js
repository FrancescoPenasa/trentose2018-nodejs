/*
* IMPLEMENTS "evennumbers.js", 
* verying that the user provides the right number of parameters (2) 
* and in the right format (numbers).
*/

/* Implement your solution here */
/**
 * @author Francesco Penasa
 */

const START_N = 2;
const STOP_N = 3;
const PARAMETERS_N = 4;


/**
 * verifying that the user provides the right number of parameters (2).
 */
if (process.argv.length != PARAMETERS_N){
	console.log("Wrong number of parameters");
	process.exit(1);
}

/**
 * retrive the start number and the stop number from the arguments.
 * parse the input in int base 10
 */
var start = parseInt(process.argv[START_N], 10)
var stop  = parseInt(process.argv[STOP_N], 10)

/**
 * verifying that the user provides the parameters in the right format (numbers)
 */
if (isNaN(start) || isNaN(stop)){
	console.log("The arguments are in the wrong format")
	process.exit(1);
}

/**
 *  look at all the numbers from the start number to the stop number
 *	if the number(n) is even (n%2 == 0), print the number.
 */
for (var n = start; n < stop; n++) {
	if ((n%2) == 0){
		console.log(n);
	}
}