$(document).ready(function () {
	var m = document.getElementById("mus");
	$(document).click(function () {
		m.play();
	}).keypress(function (e) {
		if (e.which == 109) { // key M
			if (m.paused) {
				m.play();
			} else {
				m.pause();
			}
		}
	});
});