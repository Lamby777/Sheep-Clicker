"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dx_1 = require("./dx");
const _1 = require("./");
const queries = dx_1.qstr.parse();
dx_1.qstr.clear();
let dev = 0;
if (queries["dev"] == "1")
    dev = 1;
if (queries["fn"]) {
    const qn = queries["fn"]
        .replace(/_/g, " ")
        .replace(/und;/, "_")
        .replace(/amp;/g, "&");
    alert("Welcome, " + qn + "!\nI knew you'd click that link...");
}
document.addEventListener("keydown", (e) => {
    if (e.key == "0" && dev == 1) {
        sheps++;
    }
    else if (e.key == "9" && dev == 1) {
        _1.c += _1.c * 2;
    }
});
