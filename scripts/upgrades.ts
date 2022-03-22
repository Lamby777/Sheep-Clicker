// This file is like a JSON, but better :)
import {Units}		from "./classes";

export = [
	{
		id:					"DoubleUp Shepherds",
		desc:				"2x Power!",
		costCoefficient:	5,
		costExponent:		3,
		upgrade: {
			multiBoost: {
				[Units.SHEPHERD]: 1,
			}
		}
	}
];

/*
<p id="shepm0" class="upgrade">DOUBLEUP SHEPHERDS (5k)</p>
<p id="shrrm0" class="upgrade">DOUBLEUP SHEARERS (50k)</p>
<p id="shepm1" class="upgrade">SHEEPDOG TRAINING (100k)</p>
<p id="shrrm1" class="upgrade">BETTER SHEARS (150k)</p>
<p id="kntm0" class="upgrade">DOUBLEUP KNITTERS (400k)</p>
<p id="shrrm2" class="upgrade">REINFORCED INGOT SHEARS (400k)</p>
<p id="kntm1" class="upgrade">FASTER KNITTING (600k)</p>
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