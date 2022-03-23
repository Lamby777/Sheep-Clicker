/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr}				from "./dx";
import {ScientificNotation}	from "./classes";

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
var mwbps;
var mwbpc;
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
setInterval(function () {
	shepcost = Math.ceil((sheps * 9 + 3) / 4) + 15;
	shrrcost = Math.ceil((shrr * 6 + 1) / 3) + Math.ceil(shrr / 3);
	kntcost = Math.ceil((knt * 439 + 490) * 0.9) + knt + 219000;
	sscost = Math.floor(ss ** 4 * 0.9) + ss + 10000000;
	spizcost = spiz ** 7 + 500000000;
	wbps = ((shrr * 2 * shrrmulti) + (knt * 100 * kntmulti) + (ss * 1000000 * ssmulti)) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
	mwbps = wbps.toLocaleString();
	wbpc = (sheps * shepmulti + 1) * (spiz * spizmulti > 0 ? spiz * spizmulti : 1);
	mwbpc = wbpc.toLocaleString();
	cl = Math.floor(c).toLocaleString();
	$("#pts").text("You have " + cl + " bags of wool!");
	$("#max").text("Max wool: " + max.toLocaleString());
	$("p#shepherd").text("[Shepherd] Inventory: " + sheps + " Cost: " + shepcost);
	$("p#shearer").text("[Shearer] Inventory: " + shrr + " Cost: " + shrrcost);
	$("p#knitter").text("[Wool Knitter] Inventory: " + knt + " Cost: " + kntcost);
	$("p#ssitter").text("[Sheep-sitter] Inventory: " + ss + " Cost: " + sscost);
	$("p#spiz").text("[Sheep Pizza] Inventory: " + spiz + " Cost: " + spizcost);
	$("p#wbps").text("WBpS: " + mwbps);
	$("p#wbpc").text("WBpC: " + mwbpc);
}, 10);

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
