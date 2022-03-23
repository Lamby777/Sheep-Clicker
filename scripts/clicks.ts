/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr}				from "./dx";
import {ScientificNotation,
		units,	Units}	from "./classes";

const queries = qstr.parse();
qstr.clear();

const dev = queries["dev"] === "1";

const FPS = 20;
const DELAY = 1000 / FPS;

const BLESSING_CAPS = [
	new ScientificNotation(2, 8),		// 200 Mil
	new ScientificNotation(1, 9),		// 1 Bil
	new ScientificNotation(5, 11),		// 500 Bil
	new ScientificNotation(2, 12),		// 2 T
	new ScientificNotation(2.5, 14),	// 250 T
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

export const unitAmounts: number[] = [];

for (let i in units) unitAmounts[i] = 0;

export let max = BLESSING_CAPS[0];
export let c = 0; // Bags of wool
var dxb = 0;
var drill = false;
var sbomb = 0;
var wbps = 0;
var wbpc;
const m = document.getElementById("mus");
const dxbElement = document.getElementById("dxb");


var last = "sheps"; // Last thing bought default
setInterval(() => {
	wbps		= calculateWBPS();
	wbpc = (sheps * shepmulti + 1) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
	woolBagsDisplay.innterText	= `You have ${c.toLocaleString()} bags of wool!`;
	maxBagsDisplay.innterText	= `Max wool: ${max.toLocaleString()}`;

	// Update cost displays
	$("p#shepherd").text("[Shepherd] Inventory: " + sheps + " Cost: " + shepcost);

	// Update income stats
	wbpsDisplay.innerText = `WBpS: ${wbps.toLocaleString()}`;
	wbpcDisplay.innerText = `WBpC: ${wbpc.toLocaleString()}`;
}, FPS);

document.getElementById("clickspace")
		.addEventListener("click", () => {
	addWool(wbpc);
	m.play();
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
			var i = 0;
			do {
				var shepcost = Math.ceil((sheps * 9 + 3) / 4) + 15;
				
				sheps++;
				c -= shepcost;
			} while (c >= shepcost);
			break;

		case "d": // might only run once, since ported from jquery
			if (drill) c += wbpc;
			break;

		case "m":
			if (m.paused)	m.play();
			else			m.pause();
			break;
		
		case "-":
			if (dev)
				console = window.open("/console.html", "_blank",
										"width=400,height=400");
			break;

		case "0":
			if (dev) sheps++;
			break;
		
		case "9":
			if (dev) c += c * 2;
			break;
	}
});

$("p#shepherd").click(function () {
	if (c >= shepcost) {
		sheps++;
		c -= shepcost;
		last = "sheps"
	} else {
		$("p#shepherd").css("background", "red");
		setTimeout(function () {
			$("p#shepherd").css("background", "");
		}, 300);
	}
});



// Add wool bags to total
setInterval(() => {
	addWool(wbps/FPS);
}, DELAY);

function calculateWBPS() {
	return ((shrr * 2 * shrrmulti) + (knt * 100 * kntmulti) + (ss * 1000000 * ssmulti)) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
}

// Dexie's Blessing
dxbElement.addEventListener("click", () => {
	if (c >= max) {
		c -= max;
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
	c += amount;
	if (c > max) c = max;
}

function fireSheepBomb() {
	for (i = 0; i < 30; i++) {
		var r = Math.random();
		if (r < 0.6) {
			sheps++;
		} else if (r < 0.9) {
			shrr++;
		} else if (r < 1) {
			knt++;
		}
	}
}

function getCostOfNextUnit(unitId: number) {
	return units[unitId].cost(unitAmounts[unitId]);
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
