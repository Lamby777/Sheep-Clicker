$(document).ready(function() {
	var cs = document.getElementById("cs");
	cs.volume = 0.4;
	$("div#clickspace").click(function() {
		const ctimg = $(".ctimg");
		ctimg.css("width", "49%");
		cs.play();
		setTimeout(function() {
			ctimg.css("width", "50%");
		}, 100);
	});

});