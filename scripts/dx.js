var dx = {};
dx.exists = true;
dx.about = {
	ver: "a49"
};


//Library
dx.lib = {
	str: {
		reverse: function (t) {
			return t.split().reverse().join();
		}
	},

	denullify: function (v, nv) {
		if (!v) {
			v = nv;
		}
		return v;
	},

	mobile: {
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
	},

	popup: function () {
		var w = window.open("", "_blank", "width=400,height=400");
		return w;
	},

	math: {
		factorial: function (n = 1, safe = false) {
			if (!n < 1) {
				if (n == 1) {
					return n;
				} else {
					n *= dx.lib.factorial(n - 1);
					return n;
				}
			} else {
				if (safe) return NaN;
				else throw "dx.lib.factorial: Number used is less than 1!";
			}
		},

		range: function (max, min = 0, inc = 1) {
			let a = [];
			for (var i = min + inc; i < max + inc; i += inc) {
				a.push(i);
			}
			return a;
		}
	},
	rand: {
		range: function (max = 1, rnd = false) {
			let r = (Math.random() * max);
			if (rnd) { r = Math.floor(r) + 1; }
			return r;
		},

		yn: function (bool = false) {
			if (!bool) {
				return Math.round(Math.random());
			} else if (bool) {
				return Math.random() > 0.5 ? true : false;
			}
		},

		choose: function (array) {
			return array[Math.floor(Math.random() * array.length)];
		},

		minmax: function (min, max, rnd = false) {
			let r = Math.random() * (max - min) + min;
			if (rnd) { r = Math.floor(r) + 1; }
			return r;
		},
	},

	element: {
		query: function (id) {
			if (id[0] == "#") {
				return document.getElementById(id.replace("#", ""));
			} else if (id[0] == ".") {
				return document.getElementsByClassName(id.replace(".", ""));
			} else if (id[0] == "/") {
				return document.getElementsByTagName(id.replace("/", ""));
			} else {
				throw 'dx.lib.q: Start your query with "#", "/", or "."!';
			}
		},

		createNew: function (tag, text = "") {
			const e = document.createElement(tag);
			if (text) {
				e.createTextNode(text);
			}
			return e;
		},

		setIdTo: function (i, nid) {
			document.getElementsByClassName(i).id = nid;
		}
	},

	qstr: {
		clear: function () {
			var qsurl = window.location.toString();
			if (qsurl.indexOf("?") > 0) {
				var clean_qsurl = qsurl.substring(0, qsurl.indexOf("?"));
				window.history.replaceState({}, document.title, clean_qsurl);
			}
		},
		parse: function () {
			var queryString = document.location.search;
			var queries = parseQ(queryString);
			return queries;

			function parseQ(queryString) {
				var dict = {};
				if (queryString.indexOf('?') === 0) {
					queryString = queryString.substr(1);
				}
				var parts = queryString.split('&');
				for (var i = 0; i < parts.length; i++) {
					var p = parts[i];
					var keyValuePair = p.split('=');
					var key = keyValuePair[0];
					var value = keyValuePair[1];
					value = decodeURIComponent(value);
					value = value.replace(/\+/g, ' ');
					dict[key] = value;
				}
				return dict;
			}
		}
	}
};
if (typeof dx_load == "function") {
	dx.output = dx.onload();
}