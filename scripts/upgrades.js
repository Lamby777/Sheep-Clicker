"use strict";
const classes_1 = require("./classes");
module.exports = [
    {
        id: "DoubleUp Shepherds",
        desc: "2x Power!",
        costCoefficient: 5,
        costExponent: 3,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEPHERD]: 1,
            }
        }
    }
];
