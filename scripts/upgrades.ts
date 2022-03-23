// This file is like a JSON, but better :)
import {Units}		from "./classes";

export = [
	{
		name:				"DoubleUp Shepherds",
		desc:				"2x Power!",
		costCoefficient:	5,
		costExponent:		3,
		upgrade: {
			multiBoost: {
				[Units.SHEPHERD]:	1,
			}
		}
	},
	
	{
		name:				"DoubleUp Shearers",
		desc:				"2x Power!",
		costCoefficient:	5,
		costExponent:		4,
		upgrade: {
			multiBoost: {
				[Units.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"Sheepdog Training",
		desc:				"This guy can help herd the sheep.",
		costCoefficient:	1,
		costExponent:		5,
		upgrade: {
			multiBoost: {
				[Units.SHEPHERD]:	1,
			}
		}
	},
	
	{
		name:				"Better Shears",
		desc:				"These ones actually work!",
		costCoefficient:	1.5,
		costExponent:		5,
		upgrade: {
			multiBoost: {
				[Units.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"DoubleUp Knitters",
		desc:				"2x Power!",
		costCoefficient:	4,
		costExponent:		5,
		upgrade: {
			multiBoost: {
				[Units.KNITTER]:	1,
			}
		}
	},
	
	{
		name:				"Reinforced Ingot Shears",
		desc:				"These shears contain a LOT of copper.",
		costCoefficient:	4,
		costExponent:		5,
		upgrade: {
			multiBoost: {
				[Units.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"Faster Knitting",
		desc:				"Is this possible?",
		costCoefficient:	6,
		costExponent:		5,
		upgrade: {
			multiBoost: {
				[Units.KNITTER]:	2,
			}
		}
	},
	
	{
		name:				"Now Hiring Shepherds",
		desc:				"We need some more help...",
		costCoefficient:	1,
		costExponent:		6,
		upgrade: {
			multiBoost: {
				[Units.SHEPHERD]:	2,
			}
		}
	},
	
	{
		name:				"Sheep Bomb Ability",
		desc:				"Is this possible?",
		costCoefficient:	2,
		costExponent:		6,
		upgrade: {
			/*multiBoost: {
				[Units.SHEPHERD]:	2,
			}*/
		}
	},
	
	{
		name:				"Drill Shears",
		desc:				"VRRRRRRRRR... Hold D to shear rapidly!",
		costCoefficient:	5,
		costExponent:		6,
		upgrade: {
			/*multiBoost: {
				[Units.SHEPHERD]:	2,
			}*/
		}
	},
	
	{
		name:				"Sweater Shop",
		desc:				"Capitalism at its finest.",
		costCoefficient:	2.5,
		costExponent:		7,
		upgrade: {
			multiBoost: {
				[Units.KNITTER]:	4,
			}
		}
	},
	
	{
		name:				"Larger Duffel Bags",
		desc:				"The wool isn't gonna package itself!",
		costCoefficient:	5,
		costExponent:		7,
		upgrade: {
			multiBoost: {
				[Units.SHEARER]:	1.5,
			}
		}
	},
	
	{
		name:				"Relaxing Music",
		desc:				"Calms sheep down while shearing.",
		costCoefficient:	1.44,
		costExponent:		8,
		upgrade: {
			multiBoost: {
				[Units.SHEARER]:	2.5,
			}
		}
	},
	
	{
		name:				"Customized Bells",
		desc:				"Sheep don't like getting lost in the woods.",
		costCoefficient:	3.5,
		costExponent:		8,
		upgrade: {
			multiBoost: {
				[Units.SHEPHERD]:	2.5,
			}
		}
	},
];

/*
<p id="kntm3" class="upgrade">CUSTOMER SERVICE (470Mil)</p>
<p id="shrrm5" class="upgrade">MAGICAL SHEARS (650Mil)</p>
<p id="shepm4" class="upgrade">SHEPHERD COLLEGE (900Mil)</p>
<p id="kntm4" class="upgrade">WOOL WEAVING LOOM (1.5Bil)</p>
<p id="shrrm6" class="upgrade">PERMANENT WOOL (2Bil)</p>
<p id="ssm0" class="upgrade">BOARD GAMES FOR LAMBS (10Bil)</p>
<p id="ssm1" class="upgrade">SHEEP PLAYGROUND (25Bil)</p>
*/