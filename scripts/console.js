var console;
$(document).ready(function () {
	$(document).keypress(function (e) {
		if (e.which == 99 && dev == 1) {
			console = window.open("https://sc.dexie.codes/console.html", "_blank", "width=400,height=400");
		}
	});
});