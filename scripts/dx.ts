export const str = {
	reverse: function (t: string) {
		return t.split("").reverse().join();
	}
};

export const math = {
	factorial: function (n = 1) {
		if (n < 1) throw new TypeError("Invalid Factorial!");
		let final = n;
		
		while (n > 1) {
			final *= n;
		}

		return final;
	},

	range: function (max: number, min = 0, inc = 1) {
		let a = [];
		for (var i = min + inc; i < max + inc; i += inc) {
			a.push(i);
		}
		return a;
	}
}

export const qstr = {
	clear: function () {
		var qsurl = window.location.toString();
		if (qsurl.indexOf("?") > 0) {
			var clean_qsurl = qsurl.substring(0, qsurl.indexOf("?"));
			window.history.replaceState({}, document.title, clean_qsurl);
		}
	},
	parse: function () {
		const queries = parseQ(document.location.search);
		return queries;
	}
}

export function parseQ(queryString: string) {
	const dict: Record<string, string> = {};
	
	if (queryString.indexOf("?") === 0) {
		queryString = queryString.substr(1);
	}
	
	const parts = queryString.split("&");
	parts.forEach((part: string) => {
		const [key, value] = part.split("=");
		dict[key] = decodeURIComponent(value).replace(/\+/g, " ");
	});
	return dict;
}
