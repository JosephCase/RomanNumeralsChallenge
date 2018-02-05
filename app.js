// tests go here
const RomanNumber = require('./RomanNumber');

// const testCases = [null, '', 0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '1473', 2999, 3000, 10000, 'CDXXIX', 'CD1X', 
// 'error', 'MCDLXXXII', 'MCMLXXX', 'MMMMCMXCIX', 'MMMMDMXCIX'];
const testCases = [1459, 23, 32, 678, 876, 67, 68, 69, 500];

function runTests() {
	testCases.forEach(function(input)  {
		console.log('\nTesting input %s;', input, testInput(input));
	});
}

function testInput(input) {
	try {
		let romanNumber = new RomanNumber(input);
		return `
	toInt: ${romanNumber.toInt()}
	toString: ${romanNumber.toString()}`;
	}
	catch (err) {
		return `
	${err}`;
	}
}

runTests();


