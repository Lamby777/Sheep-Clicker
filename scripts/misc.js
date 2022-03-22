$(document).ready(function () {
	queries = dx.lib.qstr.parse();
	dx.lib.qstr.clear();

	if (queries["dev"] == "1") dev = 1;

	if (queries["fn"]) {
		qn = queries["fn"].replace(/_/g, " ").replace(/und;/, "_").replace(/amp;/g, "&");
		alert("Welcome, " + qn + "!\nI knew you'd click that link...");
	}

	$(document).ready(function () {
		$(document).keypress(function (e) {
			if (e.key == "0" && dev == 1) {
				sheps++;
			} else if (e.key == "9" && dev == 1) {
				c += c * 2;
			}
		});

		//Version Copying
		$("#ver").click(function () {
			var copy = function (element) {
				var $temp = $("<input>");
				$("body").append($temp);
				$temp.val("Version" + $(element).text()).select();
				document.execCommand("copy");
				$temp.remove();
			}
			var ver = document.getElementById("ver");
			copy(ver);
			alert("Version copied to clipboard!");
		});

		// Saving
		setInterval(function() {
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
			]
		}, 15000);
	});
});