var mobileDevice = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (mobileDevice.Android() || mobileDevice.BlackBerry() || mobileDevice.iOS() || mobileDevice.Opera() || mobileDevice.Windows());
	}
};
$(document).ready(function () {
	if (mobileDevice.any()) {
		$(".cpu").hide();
	} else {
		$(".mobile").hide();
	}

	if (drill) {
		$('#clickspace').mousedown(function () {
			c += wbpc;
			timeout = setInterval(function () {
				c += wbpc;
			}, 50);

			return false;
		});
		$('#clickspace').mouseup(function () {
			clearInterval(timeout);
			return false;
		});
		$('#clickspace').mouseout(function () {
			clearInterval(timeout);
			return false;
		});
	}

	$("#bbli").click(function () {
		if (last == "sheps") {
			var i = 0;
			while (true) {
				var shepcost = Math.ceil((sheps * 9 + 3) / 4) + 15;
				if (c >= shepcost) {
					sheps++;
					c = c - shepcost;
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
					c = c - shrrcost;
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
					c = c - kntcost;
				}

				else {
					break;
				}
			}
		}

	});
});