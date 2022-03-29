/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr, rand}		from "./dx";
import Decimal			from "./_decimal";
import {$Unit}			from "./enum";
import {
	units,	formatDecimal,
}	from "./classes";

const FPS = 20;
const DELAY = 1000 / FPS;
const queries = qstr.parseQ();
qstr.clearQ();

const dev = queries["dev"] === "1";

const DXB_PRESENCES = [
	" magical",		" mysterious",		" mystical",
	" dangerous",	"n adventurous",	" guiding",
	" fuzzy",		" wooly",
];

const BLESSING_CAPS = [
	new Decimal("200_000_000"),
	new Decimal("1_000_000_000"),
	new Decimal("500_000_000_000"),
	new Decimal("2_000_000_000_000"),
	new Decimal("250_000_000_000_000"),
];

const [
	woolBagsDisplay,
	maxBagsDisplay,
	wbpsDisplay,
	wbpcDisplay,
	cont,
	csound,
	musicElement,
	dxbElement,
	clickspace,
] = [
	document.getElementById("pts"),
	document.getElementById("max"),
	document.getElementById("wbps"),
	document.getElementById("wbpc"),
	(document.getElementById("clickarea") as HTMLDivElement),
	(document.getElementById("cs") as HTMLAudioElement),
	(document.getElementById("mus") as HTMLAudioElement),
	document.getElementById("dxb"),
	document.getElementById("clickspace"),
];

musicElement.volume = 0.7;

export const uCounts:		number[]		= [];
export const uMultis:		number[]		= [];
export const uElements:		HTMLElement[]	= [];

units.forEach((v, i) => {
	uCounts[i]		= 0;
	uMultis[i]		= 1;

	// Make upgrader element
	let elem = document.createElement("p");
	elem.addEventListener("click", () => {
		let cost = getCostOfNext(i);
		
		if (c.gte(cost)) {
			c = c.minus(cost);
			uCounts[i]++;
			last = i;
		} else {
			uElements[i].style.backgroundColor = "red";
			setTimeout(() => {
				uElements[i].style.backgroundColor = "";
			}, 300);
		}
	});
	
	uElements[i] = elem;
});

export let max			= BLESSING_CAPS[0];
export let c			= new Decimal(0); // Bags of wool
export let dxbLevel		= 0;
let drillUnlocked		= false;
let wbps:	number		= 0;
let wbpc:	number;
let last				= $Unit.SHEPHERD; // Last unit purchased

export let inventory = {
	sheepBomb: 0,
}


setInterval(() => {
	wbps = calculateWBPS();
	wbpc = calculateWBPC();
	
	woolBagsDisplay.innerText
		= `You have ${c.toLocaleString()} bags of wool!`;
	maxBagsDisplay.innerText
		= `Max wool: ${max.toLocaleString()}`;

	// Update cost displays
	uElements.forEach((v, i) => {
		v.innerText =
			`[${$Unit[i]}] Hired: ${uCounts[i]} Cost: ${getCostOfNext(i)}`;
	});

	// Update income stats
	wbpsDisplay.innerText = `WBpS: ${wbps.toLocaleString()}`;
	wbpcDisplay.innerText = `WBpC: ${wbpc.toLocaleString()}`;

	// Add wbps to total
	addWool(wbps/FPS);
}, DELAY);

clickspace.addEventListener("click", () => {
	addWool(wbpc);
	musicElement.play();
	
	cont.style.width = "99%";
	csound.currentTime = 0;
	csound.play();
	setTimeout(() => {
		cont.style.width = "100%";
	}, 50);
});

document.addEventListener("keypress", (e) => {
	switch (e.key) {
		case "1":
			if (inventory.sheepBomb > 0) {
				inventory.sheepBomb--;
				fireSheepBomb();
			} else {
				alert("You don't have a Sheep Bomb!");
			} break;
		
		case "b":
			let cost = getCostOfNext(last);
			while (c.gte(cost)) {
				c = c.minus(cost);
				uCounts[last]++;
			}
			break;

		case "d": // might only run once, since ported from jquery
			if (drillUnlocked) addWool(wbpc);
			break;

		case "m":
			if (musicElement.paused)	musicElement.play();
			else						musicElement.pause();
			break;
		
		case "-":
			if (dev)
				window.open("/console.html", "_blank",
								"width=400,height=400");
			break;

		case "0":
			if (dev) uCounts[$Unit.SHEPHERD]++;
			break;
		
		case "9":
			if (dev) c = c.plus(c.times(2));
			break;
	}
});

function calculateWBPS(): number {
	// Algebraic function to find WBPS from unit amounts
	const v = (((uCounts[$Unit.SHEARER]	* 2			* uMultis[$Unit.SHEARER]) +
		(uCounts[$Unit.KNITTER]		* 100		* uMultis[$Unit.KNITTER]) +
		(uCounts[$Unit.BABYSITTER]	* 1000000	* uMultis[$Unit.BABYSITTER]))
		* getPizzaMulti());
	
	return v;
}

function calculateWBPC(): number {
	return (uCounts[$Unit.SHEPHERD] * uMultis[$Unit.SHEPHERD] + 1)
		* getPizzaMulti();
}

function getPizzaMulti(): number {
	const	multi = uCounts[$Unit.PIZZAGUY] * uMultis[$Unit.PIZZAGUY];
	return	multi > 0 ? multi : 1;
}

// Dexie's Blessing
dxbElement.addEventListener("click", () => {
	if (c >= max) {
		c = new Decimal(0);
		dxbLevel++;
		var presence = rand.r_choice(DXB_PRESENCES);
		alert(`You feel a${presence} presence...`);
	} else {
		alert("Not enough money!");
	}

	max = BLESSING_CAPS[dxbLevel];
	dxbElement.innerText =
		`DEXIE'S BLESSING ${(dxbLevel + 1)} (${max.toLocaleString()})`;
});

function addWool(amount: number): void {
	c = c.plus(amount);
	if (c.gt(max)) c = max;
}

function fireSheepBomb() {
	for (let i = 0; i < 30; i++) {
		var r = Math.random();
		if (r < 0.6) {
			uCounts[$Unit.SHEPHERD]++;
		} else if (r < 0.9) {
			uCounts[$Unit.SHEARER]++;
		} else {
			uCounts[$Unit.KNITTER]++;
		}
	}
}

function getCostOfNext(unitId: number) {
	return units[unitId].cost(uCounts[unitId]);
}

// Saving
/* setInterval(function() {
	localStorage.setItem("saves", [
		c,
		sheps,
		shrr,
		knt,
		drill ? 1 : 0,
		sbomb ? 1 : 0,
		shepmulti,
		shrrmulti,
		kntmulti,
	]);
}, 15000); */
