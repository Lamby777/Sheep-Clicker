/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr}			from "./dx";
import {units,	$Unit}	from "./classes";
import Decimal			from "./_decimal";

const queries = qstr.parse();
qstr.clear();

const dev = queries["dev"] === "1";

const cont = (document.getElementById("clickarea") as HTMLDivElement);
const csound = (document.getElementById("cs") as HTMLAudioElement);
csound.volume = 0.4;

const FPS = 20;
const DELAY = 1000 / FPS;

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
] = [
	document.getElementById("pts"),
	document.getElementById("max"),
	document.getElementById("wbps"),
	document.getElementById("wbpc"),
];

export const uCounts:		number[] = [];
export const uMultis:		number[] = [];
export const uElements:		HTMLElement[] = [];

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
	
	uElements[i]	= elem;
});

export let max			= BLESSING_CAPS[0];
export let c			= new Decimal(0); // Bags of wool
var dxb					= 0;
var drill				= false;
var sbomb				= false;
var wbps:	number		= 0;
var wbpc:	number;
const m = (document.getElementById("mus") as HTMLAudioElement);
const dxbElement = document.getElementById("dxb");


var last = 0; // Last thing bought default
setInterval(() => {
	wbps		= calculateWBPS();
	wbpc		= calculateWBPC();
	woolBagsDisplay.innerText	= `You have ${c.toLocaleString()} bags of wool!`;
	maxBagsDisplay.innerText	= `Max wool: ${max.toLocaleString()}`;

	// Update cost displays
	for (let i = 0; i < units.length; i++) {
		uElements[i].innerText =
			`[Shepherd] Inventory: ${uCounts[i]} Cost: ${getCostOfNext(i)}`;
	}

	// Update income stats
	wbpsDisplay.innerText = `WBpS: ${wbps.toLocaleString()}`;
	wbpcDisplay.innerText = `WBpC: ${wbpc.toLocaleString()}`;
}, DELAY);

document.getElementById("clickspace")
		.addEventListener("click", () => {
	addWool(wbpc);
	m.play();
	
	cont.style.width = "99%";
	csound.play();
	setTimeout(() => {
		cont.style.width = "100%";
	}, 50);
});

document.addEventListener("keypress", (e) => {
	switch (e.key) {
		case "1":
			if (sbomb) {
				sbomb = false;
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
			if (drill) addWool(wbpc);
			break;

		case "m":
			if (m.paused)	m.play();
			else			m.pause();
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



// Add wool bags to total
setInterval(() => {
	addWool(wbps/FPS);
}, DELAY);

function calculateWBPS() {
	// Algebraic function to find WBPS from unit amounts
	return ((uCounts[$Unit.SHEARER]		* 2			* uMultis[$Unit.SHEARER]) +
			(uCounts[$Unit.KNITTER]		* 100		* uMultis[$Unit.KNITTER]) +
			(uCounts[$Unit.BABYSITTER]	* 1000000	* uMultis[$Unit.BABYSITTER]))
		* getPizzaMulti();
}

function calculateWBPC() {
	return (uCounts[$Unit.SHEPHERD] * uMultis[$Unit.SHEPHERD] + 1)
		* getPizzaMulti();
}

function getPizzaMulti() {
	const	multi = uCounts[$Unit.PIZZAGUY] * uMultis[$Unit.PIZZAGUY];
	return	multi > 0 ? multi : 1;
}

// Dexie's Blessing
dxbElement.addEventListener("click", () => {
	if (c >= max) {
		c = new Decimal(0);
		dxb++;
		var presences = [" magical", " mysterious", " mystical",
						 " dangerous", "n adventurous"]
		var presence = presences[Math.floor(Math.random()*presences.length)];
		alert("You feel a" +presence +" presence, granting you more power...");
	} else {
		alert("Not enough money!");
	}

	max = BLESSING_CAPS[dxb];
	dxbElement.innerText =
		`DEXIE'S BLESSING ${(dxb + 1)} (${max.toLocaleString()})`;
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
