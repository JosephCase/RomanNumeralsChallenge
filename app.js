// tests go here
const RomanNumber = require('./RomanNumber');

const testCases = {
	validNumerals: ['I','III','IIII','IV','V','CDXXIX','MCDLXXXII','MCMLXXX']
}

function runTests() {
	testCases.validNumerals.forEach(function(numeral)  {    
		let romanNumber = new RomanNumber(numeral);
		console.log('%s is', numeral, romanNumber.toInt());
	});
}

runTests();


