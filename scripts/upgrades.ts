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
];

/*
<p id="shepm2" class="upgrade">NOW HIRING SHEPHERDS (1Mil)</p>
<p id="sbomb" class="upgrade">SHEEP BOMB ABILITY (2Mil)</p>
<p id="drill" class="upgrade"><span title="You can hold D to click rapidly">DRILL SHEARS ABILITY (5Mil)</span></p>
<p id="kntm2" class="upgrade">SWEATER SHOP (25Mil)</p>
<p id="shrrm3" class="upgrade">LARGER DUFFEL BAGS (50Mil)</p>
<p id="shrrm4" class="upgrade">RELAXING MUSIC FOR SHEEP (144Mil)</p>
<p id="shepm3" class="upgrade">CUSTOMIZED BELLS (350Mil)</p>
<p id="kntm3" class="upgrade">CUSTOMER SERVICE (470Mil)</p>
<p id="shrrm5" class="upgrade">MAGICAL SHEARS (650Mil)</p>
<p id="shepm4" class="upgrade">SHEPHERD COLLEGE (900Mil)</p>
<p id="kntm4" class="upgrade">WOOL WEAVING LOOM (1.5Bil)</p>
<p id="shrrm6" class="upgrade">PERMANENT WOOL (2Bil)</p>
<p id="ssm0" class="upgrade">BOARD GAMES FOR LAMBS (10Bil)</p>
<p id="ssm1" class="upgrade">SHEEP PLAYGROUND (25Bil)</p>
*/