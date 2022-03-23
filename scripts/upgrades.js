"use strict";
const classes_1 = require("./classes");
module.exports = [
    {
        name: "DoubleUp Shepherds",
        desc: "2x Power!",
        costCoefficient: 5,
        costExponent: 3,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEPHERD]: 1,
            }
        }
    },
    {
        name: "DoubleUp Shearers",
        desc: "2x Power!",
        costCoefficient: 5,
        costExponent: 4,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEARER]: 1,
            }
        }
    },
    {
        name: "Sheepdog Training",
        desc: "This guy can help herd the sheep.",
        costCoefficient: 1,
        costExponent: 5,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEPHERD]: 1,
            }
        }
    },
    {
        name: "Better Shears",
        desc: "These ones actually work!",
        costCoefficient: 1.5,
        costExponent: 5,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEARER]: 1,
            }
        }
    },
    {
        name: "DoubleUp Knitters",
        desc: "2x Power!",
        costCoefficient: 4,
        costExponent: 5,
        upgrade: {
            multiBoost: {
                [classes_1.Units.KNITTER]: 1,
            }
        }
    },
    {
        name: "Reinforced Ingot Shears",
        desc: "These shears contain a LOT of copper.",
        costCoefficient: 4,
        costExponent: 5,
        upgrade: {
            multiBoost: {
                [classes_1.Units.SHEARER]: 1,
            }
        }
    },
    {
        name: "Faster Knitting",
        desc: "Is this possible?",
        costCoefficient: 6,
        costExponent: 5,
        upgrade: {
            multiBoost: {
                [classes_1.Units.KNITTER]: 2,
            }
        }
    },
];
