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

	// probably gonna raise an exception at higher numbers...
	// that's why I made this class, anyway.
	static equals(	first:	ScientificNotation,
				 	second:	ScientificNotation): boolean {
		
		return (	first.coefficient	== second.coefficient
				&&	first.exponent		== second.exponent);
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

// Initialize upgrades
upgradeDB.forEach((val) => {
	//
});
