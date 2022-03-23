// This file is like a JSON, but better :)
import {$Unit}		from "./classes";
import Decimal		from "./decimal";

export = [
	{
		name:				"DoubleUp Shepherds",
		desc:				"2x Power!",
		cost:				new Decimal("5_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEPHERD]:	1,
			}
		}
	},
	
	{
		name:				"DoubleUp Shearers",
		desc:				"2x Power!",
		cost:				new Decimal("50_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"Sheepdog Training",
		desc:				"This guy can help herd the sheep.",
		cost:				new Decimal("100_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEPHERD]:	1,
			}
		}
	},
	
	{
		name:				"Better Shears",
		desc:				"These ones actually work!",
		cost:				new Decimal("150_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"DoubleUp Knitters",
		desc:				"2x Power!",
		cost:				new Decimal("400_000"),
		upgrade: {
			multiBoost: {
				[$Unit.KNITTER]:	1,
			}
		}
	},
	
	{
		name:				"Reinforced Ingot Shears",
		desc:				"These shears contain a LOT of copper.",
		cost:				new Decimal("400_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEARER]:	1,
			}
		}
	},
	
	{
		name:				"Faster Knitting",
		desc:				"Is this possible?",
		cost:				new Decimal("600_000"),
		upgrade: {
			multiBoost: {
				[$Unit.KNITTER]:	2,
			}
		}
	},
	
	{
		name:				"Now Hiring Shepherds",
		desc:				"We need some more help...",
		cost:				new Decimal("1_000_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEPHERD]:	2,
			}
		}
	},
	
	{
		name:				"Sheep Bomb Ability",
		desc:				"Is this possible?",
		cost:				new Decimal("2_000_000"),
		upgrade: {
			/*multiBoost: {
				[$Unit.SHEPHERD]:	2,
			}*/
		}
	},
	
	{
		name:				"Drill Shears",
		desc:				"VRRRRRRRRR... Hold D to shear rapidly!",
		cost:				new Decimal("5_000_000"),
		upgrade: {
			/*multiBoost: {
				[$Unit.SHEPHERD]:	2,
			}*/
		}
	},
	
	{
		name:				"Sweater Shop",
		desc:				"Capitalism at its finest.",
		cost:				new Decimal("25_000_000"),
		upgrade: {
			multiBoost: {
				[$Unit.KNITTER]:	4,
			}
		}
	},
	
	{
		name:				"Larger Duffel Bags",
		desc:				"The wool isn't gonna package itself!",
		cost:				new Decimal("50_000_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEARER]:	1.5,
			}
		}
	},
	
	{
		name:				"Relaxing Music",
		desc:				"Calms sheep down while shearing.",
		cost:				new Decimal("144_000_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEARER]:	2.5,
			}
		}
	},
	
	{
		name:				"Customized Bells",
		desc:				"Sheep don't like getting lost in the woods.",
		cost:				new Decimal("350_000_000"),
		upgrade: {
			multiBoost: {
				[$Unit.SHEPHERD]:	2.5,
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