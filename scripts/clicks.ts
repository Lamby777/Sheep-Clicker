/*	################################
	#	  Dexie's Sheep Clicker	   #
	################################	*/
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
	ml = max.toLocaleString();
	$("#pts").text("You have " + cl + " bags of wool!");
	$("#max").text("Max wool: " + ml);
	$("p#shepherd").text("[Shepherd] Inventory: " + sheps + " Cost: " + shepcost);
	$("p#shearer").text("[Shearer] Inventory: " + shrr + " Cost: " + shrrcost);
	$("p#knitter").text("[Wool Knitter] Inventory: " + knt + " Cost: " + kntcost);
	$("p#ssitter").text("[Sheep-sitter] Inventory: " + ss + " Cost: " + sscost);
	$("p#spiz").text("[Sheep Pizza] Inventory: " + spiz + " Cost: " + spizcost);
	$("p#wbps").text("WBpS: " + mwbps);
	$("p#wbpc").text("WBpC: " + mwbpc);
}, 10);

$("div#clickspace").click(function () {
	c += wbpc;
});

$(document).keypress(function (e) {
	if (e.which == 57 || e.which == 48 || e.which == 99 || e.which == 109) {
	} else if (e.which == 49) {
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
		}
	} else if (e.which == 98) {
		if (last == "sheps") {
			var i = 0;
			while (true) {
				var shepcost = Math.ceil((sheps * 9 + 3) / 4) + 15;
				if (c >= shepcost) {
					sheps++;
					c -= shepcost;
				}

				else {
					break;
				}
			}
			return 0;
		} else if (last == "shrr") {
			var i = 0;
			while (true) {
				var shrrcost = Math.ceil((shrr * 6 + 1) / 3) + Math.ceil(shrr / 3);
				if (c >= shrrcost) {
					shrr++;
					c -= shrrcost;
				}

				else {
					break;
				}
			}
		} else if (last == "knt") {
			var i = 0;
			while (true) {
				var kntcost = Math.ceil((knt * 439 + 490) * 0.9) + knt + 219000;
				if (c >= kntcost) {
					knt++;
					c -= kntcost;
				}

				else {
					break;
				}
			}
		} else if (last == "ss") {
			var i = 0;
			while (true) {
				var sscost = Math.floor(ss ** 4 * 0.9) + ss + 10000000;
				if (c >= sscost) {
					ss++;
					c -= sscost;
				}

				else {
					break;
				}
			}
		} else if (last == "spiz") {
			var i = 0;
			while (true) {
				var spizcost = spiz ** 7 + 500000000;
				if (c >= spizcost) {
					spiz++;
					c -= spizcost;
				}

				else {
					break;
				}
			}
		}

	} else if (e.which == 100) {
		if (drill) {
			c += wbpc;
		}
	} else {
		console.log(e.which);
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

$("p#shearer").click(function () {
	if (c >= shrrcost) {
		shrr++;
		c -= shrrcost;
		last = "shrr"
	} else {
		$("p#shearer").css("background", "red");
		setTimeout(function () {
			$("p#shearer").css("background", "");
		}, 300);
	}
});

$("p#knitter").click(function () {
	if (c >= kntcost) {
		knt++;
		c -= kntcost;
		last = "knt";
	} else {
		$("p#knitter").css("background", "red");
		setTimeout(function () {
			$("p#knitter").css("background", "");
		}, 300);
	}
});

$("p#ssitter").click(function () {
	if (c >= sscost) {
		ss++;
		c -= sscost;
		last = "ss";
	} else {
		$("p#ssitter").css("background", "red");
		setTimeout(function () {
			$("p#ssitter").css("background", "");
		}, 300);
	}
});

$("p#spiz").click(function () {
	if (c >= spizcost) {
		spiz++;
		c -= spizcost;
		last = "spiz";
	} else {
		$("p#spiz").css("background", "red");
		setTimeout(function () {
			$("p#spiz").css("background", "");
		}, 300);
	}
});