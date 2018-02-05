// RomanNumber class

const numeralsLookup = {
	'M' 	: 	1000,
	'CM' 	: 	900,
	'D' 	: 	500,
	'CD' 	: 	400,
	'C' 	: 	100,
	'XC' 	: 	90,
	'L' 	: 	50,
	'XL' 	: 	40,
	'X' 	: 	10,
	'IX' 	: 	9,
	'V' 	: 	5,
	'IV' 	: 	4,
	'I' 	: 	1
}

module.exports = class RomanNumber {

	constructor(input) {
		this.input = input;
		// this.numeral = null;
		// this.integer = null;
	}

	// validation layer
	getType(input) {
		// for now do not accept integers as strings e.g. '11'
		if(typeof input === 'string') {
			return typeof input;
		}
		throw new Error('invalid value');
	}
	validateNumeral(numeral) {
		// check for string length
		if(numeral.length === 0) throw new	Error('invalid value');
		// check for invalid numerals
		const invalidNumerals = ['MMMM', 'CCCC', 'XXXX', 'IIII'];
		invalidNumerals.forEach(invalidNum => {
			if(numeral.includes(invalidNum)) throw new Error('invalid value');
		})
		
	}
	validateInteger(int) {
		if(int < 1 || int > 3999) throw new Error('invalid range');
	}

	//lookup functions
	lookupInteger(numeral) {
		let int = numeralsLookup[numeral];
		console.log(numeral, int);
		if(!int) throw new Error('invalid value');
		return int;
	}

	toInt() {

		let input = this.input;

		if(this.getType(input) === 'string') {
			this.validateNumeral(input);					//validate as numeral
			var int = this.convertNumeralToInteger(input);	//convert it to an integer
			this.validateInteger(int);						//validate as an integer
			return int;
		}

	}

	convertNumeralToInteger(num) {
		var total = 0;
		for (var i = 0; i < num.length; i++) {

			let char = num.charAt(i);
			let nextChar = num.charAt(i+1);
			if(nextChar && this.lookupInteger(char) < this.lookupInteger(nextChar)) {
				total = total + this.lookupInteger(char.concat(nextChar));
				i++;	//skip the next character
			} else {
				total = total + this.lookupInteger(char);
			}

		}

		return total;
	}

}