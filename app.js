// tests go here
const RomanNumber = require('./RomanNumber');

const testCases = [null, '', 0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '1473', 2999, 3000, 10000, 'CDXXIX', 'CD1X', 
'error', 'MCDLXXXII', 'MCMLXXX', 'MMMMCMXCIX', 'MMMMDMXCIX']

function runTests() {
	testCases.forEach(function(numeral)  {
		try {
			let romanNumber = new RomanNumber(numeral);
			console.log('%s is', numeral, romanNumber.toInt());
		}
		catch (err) {
			console.log(err);
		} 
	});
}

runTests();


