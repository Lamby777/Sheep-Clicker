/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr}				from "./dx";
import {ScientificNotation,
		COST_ALGORITHMS,
		Units			}	from "./classes";

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
]

const [
	woolBagsDisplay,
	maxBagsDisplay,
] = [
	document.getElementById("pts"),
	document.getElementById("max"),
];

export let max = BLESSING_CAPS[0];
export let c;
var dxb = 0;
var drill;
var sbomb;
var wbps;
var wbpc;
var sheps;
var shrr;
var knt;
var ss;
var spiz;
var shepcost;
var shrrcost;
var kntcost;
var sscost;
var spizcost;
var shepmulti;
var shrrmulti;
var kntmulti;
var ssmulti;
var spizmulti;
var cl;
const m = document.getElementById("mus");
const dxbElement = document.getElementById("dxb");

c = 0;          // Bags of wool
drill = false;  // Don't start with it!
sbomb = 0;      // Same here
wbps = 0;       // Wool bags per second
sheps = 0;      // Shepherds
shrr = 0;       // Idle Shearers
knt = 0;        // Idle Knitters
ss = 0;         // Idle Sheep-sitters
spiz = 0;       // Idle Sheep Pizza Deliverers
shepmulti = 1;  // Multipliers (from upgrades)
shrrmulti = 1;  //
kntmulti = 1;   //
ssmulti = 1;    //
spizmulti = 1;  //


var last = "sheps"; // Last thing bought default
setInterval(() => {
	shepcost	= COST_ALGORITHMS[Units.SHEPHERD](sheps);
	shrrcost	= COST_ALGORITHMS[Units.SHEARER](shrr);
	kntcost		= COST_ALGORITHMS[Units.KNITTER](knt);
	sscost		= COST_ALGORITHMS[Units.BABYSITTER](ss);
	spizcost	= COST_ALGORITHMS[Units.PIZZAGUY](spiz);
	wbps		= ((shrr * 2 * shrrmulti) + (knt * 100 * kntmulti) + (ss * 1000000 * ssmulti)) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
	wbpc = (sheps * shepmulti + 1) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
	woolBagsDisplay.innterText	= `You have ${c.toLocaleString()} bags of wool!`;
	maxBagsDisplay.innterText	= `Max wool: ${max.toLocaleString()}`;
	$("p#shepherd").text("[Shepherd] Inventory: " + sheps + " Cost: " + shepcost);
	$("p#wbps").text("WBpS: " + wbps.toLocaleString());
	$("p#wbpc").text("WBpC: " + wbpc.toLocaleString());
}, FPS);

$("div#clickspace").click(function () {
	addWool(wbpc);
});

$(document).click(function () {
	m.play();
});

document.addEventListener("keypress", (e) => {
	switch (e.key) {
		case "1":
			if (sbomb) {
				sbomb = false;
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
