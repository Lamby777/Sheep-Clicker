"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Units = void 0;
const NUMBER_SUFFIXES = ["", "k", "Mil", "Bil", "T", "Q",
    "ℚ", "S", "7̶", "O", "N", "D"];
const upgrades_1 = __importDefault(require("./upgrades"));
class Upgrade {
    id;
    name;
    description;
    cost;
    action;
    makeHTMLElement() {
        const fCost = ScientificNotation.format(this.cost);
        const element = document.createElement("p");
        element.classList.add("upgrade");
        element.innerText = `${this.name} (${fCost})`;
        return element;
    }
}
class ScientificNotation {
    coefficient;
    exponent;
    constructor(coefficient, exponent) {
        this.coefficient = coefficient;
        this.exponent = exponent;
    }
    static equals(first, second) {
        return (first.coefficient == second.coefficient
            && first.exponent == second.exponent);
    }
    static format(sn) {
        return "" +
            sn.coefficient.toFixed(3) +
            ScientificNotation.getSuffix(sn);
    }
    static getSuffix(sn) {
        const exp3pair = Math.floor(sn.exponent / 3);
        if (exp3pair <= NUMBER_SUFFIXES.length)
            return NUMBER_SUFFIXES[exp3pair];
        else
            return `e^${sn.exponent}`;
    }
}
var Units;
(function (Units) {
    Units[Units["SHEPHERD"] = 0] = "SHEPHERD";
    Units[Units["SHEARER"] = 1] = "SHEARER";
    Units[Units["KNITTER"] = 2] = "KNITTER";
    Units[Units["BABYSITTER"] = 3] = "BABYSITTER";
    Units[Units["PIZZAGUY"] = 4] = "PIZZAGUY";
})(Units = exports.Units || (exports.Units = {}));
upgrades_1.default.forEach((val) => {
});
