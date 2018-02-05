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
		this.numeral = null;
		this.integer = null;
		this.type = null;



	}

	// validation layer
	validateType(input) {
		// for now do not accept integers as strings e.g. '11'
		if(typeof input === 'number' || 'string') {

		}
		throw new Error('invalid value');
	}

	toInt() {
		if(this.integer) return this.integer;	// return if we already have the value.

		var total = 0;
		for (var i = 0; i < this.numeral.length; i++) {

			let char = this.numeral.charAt(i);
			let nextChar = this.numeral.charAt(i+1);
			if(numeralsLookup[char] < numeralsLookup[nextChar]) {
				total = total + numeralsLookup[char.concat(nextChar)];
				i++;	//skip the next character
			} else {
				total = total + numeralsLookup[char];
			}

		}

		this.integer = total;

		return this.integer;

	}
}