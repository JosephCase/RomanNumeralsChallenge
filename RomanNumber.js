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

const STRING = 'string';
const NUMBER = 'number';

//factory wrapper to ensure we always return a new instance of RomanNumber
module.exports = function(input) {
  return new RomanNumber(input);
}

class RomanNumber {

	constructor(input) {
		this.numeral = null;
		this.integer = null;
		this.setValues(input);
	}

	setValues(input) {

		this.validateType(input);

		if(typeof input === STRING) {

			this.validateNumeral(input);					//validate as numeral
			let int = this.convertNumeralToInteger(input);	//convert it to an integer
			this.validateInteger(int);						//validate as an integer

			// if everything's good set the integer and numeral values
			this.integer = int;
			this.numeral = input;

		} else if (typeof input === NUMBER) {

			this.validateInteger(input);					//validate as integer

			// if everything's good set the integer and numeral values
			this.integer = input;
			this.numeral = this.convertIntegerToNumeral(input);

		}
	}


	// get functions
	toInt() {
		return this.integer;
	}

	toString() {
		return this.numeral;
	}


	// validation functions
	validateType(input) {
		if(input === undefined || input === null) throw new Error('value required');
		if(typeof input !== STRING && typeof input !== NUMBER) throw new Error('invalid value');
	}
	validateNumeral(numeral) {
		// check for string length
		if(numeral.length === 0) throw new Error('value required');
		// check for invalid numerals
		const invalidNumerals = ['MMMM', 'CCCC', 'XXXX', 'IIII'];
		invalidNumerals.forEach(invalidNum => {
			if(numeral.includes(invalidNum)) throw new Error('invalid value');
		})
		
	}
	validateInteger(int) {
		if(int < 1 || int > 3999) throw new Error('invalid range');
	}


	// conversion functions
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

	convertIntegerToNumeral(int) {
		var intString = int.toString();
		var numeral = '';
		for (var i = 0; i < intString.length; i++) {

			let fig = intString.charAt(i) * 1;								//set current figure e.g. 1, 4, 7, 2...
			let mag = Math.pow(10, intString.length - (i + 1));				//set magnitude 1000, 100, 10 or 1;

			var char = '';

			if([6,7,8].includes(fig)){

				// if in the format VI, VII, VIII append the V and then however many I's left
				char += this.lookupNumeral(5 * mag);	//add a 5
				for (var j = 1; j <= (fig - 5); j++) {	// add the 1s
					char += this.lookupNumeral(mag)
				}

			} else if([2,3].includes(fig)){

				// just apend the amount of Is correspondiong to the number
				for (var j = 1; j <= fig; j++) {
					char += this.lookupNumeral(mag)
				}

			} else if(fig === 0) {
				//do nothing	-	just adding this condidion for clarity
			} else { 
				char = this.lookupNumeral(fig * mag);
			}

			numeral += char;

		}
		return numeral;
	}


	//lookup functions
	lookupInteger(numeral) {
		let int = numeralsLookup[numeral];
		if(!int) throw new Error('invalid value');
		return int;
	}
	lookupNumeral(int) {
		for (var key in numeralsLookup) {
			if(numeralsLookup[key] == int){
				return key;
			}
		}
		return '#BUG#';
	}
}