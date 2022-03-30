/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/

import {qstr, rand}		from "./dx";
import Decimal			from "./_decimal";
import {
	$Unit, BLESSING_CAPS, DXB_PRESENCES
}	from "./staticConf";
import {
	units,	formatDecimal
}	from "./classes";

const FPS = 20;
const DELAY = 1000 / FPS;
const queries = qstr.parseQ();
qstr.clearQ();



const dev = queries["dev"] === "1";

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
	hrDepartment
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
	document.getElementById("hr-department"),
];

musicElement.volume = 0.7;

interface UnitData {
	count:			number;
	multi:			number;
	element:		HTMLElement;
}

export const uData: UnitData[] = [];

units.forEach((v, i) => {
	// Make upgrader element
	let elem = document.createElement("p");
	elem.id = `hire-unit-${i}`;
	elem.classList.add("supgrade", "col-4", "mx-auto");
	hrDepartment.appendChild(elem);
	
	uData[i] = {
		count:		0,
		multi:		1,
		element:	elem,
	}
	
	elem.addEventListener("click", () => {
		let cost = getCostOfNext(i);
		
		if (c.gte(cost)) {
			c = c.minus(cost);
			uData[i].count++;
			last = i;
		} else {
			uData[i].element.style.backgroundColor = "red";
			setTimeout(() => {
				uData[i].element.style.backgroundColor = "";
			}, 300);
		}
	});
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
//		= `You have ${c.toLocaleString()} bags of wool!`;
		= `You have ${formatDecimal(c)} bags of wool!`;
	maxBagsDisplay.innerText
		= `Max wool: ${max.toLocaleString()}`;

	// Update cost displays
	uData.forEach((v, i) => {
		v.element.innerText =
`[${units[i].name}] Hired: ${uData[i].count} Cost: ${getCostOfNext(i)}`;
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
				uData[last].count++;
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
			if (dev) uData[$Unit.SHEPHERD].count++;
			break;
		
		case "9":
			if (dev) c = c.plus(c.times(2));
			break;
	}
});

function calculateWBPS(): number {
	// Algebraic function to find WBPS from unit amounts
	const v = ((
(uData[$Unit.SHEARER].count		* 2			* uData[$Unit.SHEARER].multi) +
(uData[$Unit.KNITTER].count		* 100		* uData[$Unit.KNITTER].multi) +
(uData[$Unit.BABYSITTER].count	* 1000000	* uData[$Unit.BABYSITTER].multi)
	) * getPizzaMulti());
	
	return v;
}

function calculateWBPC(): number {
	return (uData[$Unit.SHEPHERD].count * uData[$Unit.SHEPHERD].multi + 1)
		* getPizzaMulti();
}

function getPizzaMulti(): number {
	const	multi = uData[$Unit.PIZZAGUY].count *
					uData[$Unit.PIZZAGUY].multi;
	
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
			uData[$Unit.SHEPHERD].count++;
		} else if (r < 0.9) {
			uData[$Unit.SHEARER].count++;
		} else {
			uData[$Unit.KNITTER].count++;
		}
	}
}

function getCostOfNext(unitId: number) {
	return units[unitId].cost(uData[unitId].count);
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
