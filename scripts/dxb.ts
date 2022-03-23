setInterval(function () {
	max = dxb == 0 ? 200000000 : dxb == 1 ? 1000000000 :
		dxb == 2 ? 500000000000 : dxb == 3 ? 2000000000000 : 250000000000000;
	$("#dxb").text("DEXIE'S BLESSING " +(dxb + 1) +" (" +ml +")");
	if (c > max) {
		c = max;
	}
}, 10);

document.getElementById("#dxb").addEventListener("click", () => {
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
});
