// tests go here
const RomanNumber = require('./RomanNumber');

const testCases = {
	validNumerals: ['I','III', 'IV','V','CDXXIX','MCDLXXXII','MCMLXXX'],
	invalidInputs: [null, '', 0, 'IIII', '1473', 10000, 'CD1X', 'error', 'MMMMCMXCIX', 'MMMMDMXCIX']
}

function runTests() {
	testCases.validNumerals.forEach(function(numeral)  {
		try {
			let romanNumber = new RomanNumber(numeral);
			console.log('%s is', numeral, romanNumber.toInt());
		}
		catch (err) {
			console.log(err);
		} 
	});
	testCases.invalidInputs.forEach(function(input)  {
		try {
			let romanNumber = new RomanNumber(input);
			console.log('%s is', input, romanNumber.toInt());
		} 
		catch (err) {
			console.log(err);
		}
	});
}

runTests();


