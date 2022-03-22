// Classes for use in other files
"use strict";

interface UpgradeTable {
	// Amount added to multipliers
	multiIncrements?: {
		[key in Units]?: number;
	}
}

class Upgrade {
	public readonly name:			string;
	public readonly description:	string;
	public readonly cost:			number;
	public readonly upgradeFX:		UpgradeTable | (() => void);

	makeHTMLElement() {
		return "";
	}
}

enum Units {
	Shepherd,
	Shearer,
	Knitter,
	Babysitter,
	PizzaGuy,
}
