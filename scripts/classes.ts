// Classes for use in other files
"use strict";

const NUMBER_SUFFIXES = [	"", "k", "Mil", "Bil", "T", "Q",
							"ℚ", "S", "7̶", "O", "N", "D"	];

import upgradeDB		from "./upgrades";

interface UpgradeTable {
	// Amount added to multipliers
	multiBoost?: number[];
}

class Upgrade {
	public readonly id:				number;
	public readonly name:			string;
	public readonly description:	string;
	public readonly cost:			ScientificNotation;
	public readonly action:			UpgradeTable | (() => void);

	makeHTMLElement(): HTMLElement {
		const fCost = ScientificNotation.format(this.cost);
		const element = document.createElement("p");
		element.classList.add("upgrade");
		element.innerText = `${this.name} (${fCost})`;

		return element;
	}
}

// Had to rename this class because I realized I
// invented a math concept that already exists... ¯\_(ツ)_/¯
class ScientificNotation {
	constructor(
		public coefficient:	number,
		public exponent:	number
	) {}

	equals(other: ScientificNotation): boolean {
		// Very simple comparison	
		return (	this.coefficient	== other.coefficient
				&&	this.exponent		== other.exponent);
	}

	less(other: ScientificNotation): boolean {
		// If exponents are unequal, compare them.
		if (this.exponent < other.exponent) return true;
			
		// Otherwise, compare coefficients
		else if (this.coefficient < other.coefficient) return true;

		// If both statements haven't returned yet
		else return false;
	}

	greater(other: ScientificNotation): boolean {
		// If exponents are unequal, compare them.
		if (this.exponent > other.exponent) return true;
			
		// Otherwise, compare coefficients
		else if (this.coefficient > other.coefficient) return true;

		// If both statements haven't returned yet
		else return false;
	}
	
	static format(sn: ScientificNotation): string {
		return "" +
				sn.coefficient.toFixed(3) +
				ScientificNotation.getSuffix(sn);
	}

	static getSuffix(sn: ScientificNotation): string {
		// The "suffix bracket" of the number (goes up every 3 digits)
		const exp3pair = Math.floor(sn.exponent / 3);

		// If over 999 Decillion, just spit out the scientific notation
		if (exp3pair <= NUMBER_SUFFIXES.length)
			return NUMBER_SUFFIXES[exp3pair];
		else return `e^${sn.exponent}`;
	}
}

export enum Units {
	SHEPHERD,
	SHEARER,
	KNITTER,
	BABYSITTER,
	PIZZAGUY,
}

export const COST_ALGORITHMS = [
	// Shepherd
	(lv) => (Math.ceil((lv * 9 + 3) / 4) + 15),
	
	// Shearer
	(lv) => (Math.ceil((lv * 6 + 1) / 3) + Math.ceil(lv / 3)),

	// Knitter
	(lv) => (Math.ceil((lv * 439 + 490) * 0.9) + lv + 219000),

	// Babysitter
	(lv) => (Math.floor(lv ** 4 * 0.9) + lv + 10000000),

	// Sheep Pizza
	(lv) => (spiz ** 7 + 500000000),
];

// Initialize upgrades
upgradeDB.forEach((val) => {
	//
});
