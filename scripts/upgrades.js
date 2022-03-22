$(document).ready(function () {
	$("#drill").click(function () {
		if (c >= 5000000) {
			c -= 5000000;
			drill = true;
			$("#drill").hide();
			alert("Drill Shear bought. Hold D to shear!");
		} else {
			alert("Not enough money!");
		}
	});
	$("#shepm0").click(function () {
		if (c >= 5000) {
			c -= 5000;
			shepmulti++;
			$("#shepm0").hide();
			alert("Shepherd productivity multiplier increased by 1");
		} else {
			alert("Not enough money!");
		}
	});
	$("#shrrm0").click(function () {
		if (c >= 50000) {
			c -= 50000;
			shrrmulti++;
			$("#shrrm0").hide();
			alert("Shearer productivity multiplier increased by 1");
		} else {
			alert("Not enough money!");
		}
	});

	$("#kntm0").click(function () {
		if (c >= 400000) {
			c -= 400000;
			kntmulti++;
			$("#kntm0").hide();
			alert("Knitter productivity multiplier increased by 1");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shepm1").click(function () {
		if (c >= 100000) {
			c -= 100000;
			shepmulti++;
			shepmulti++;
			$("#shepm1").hide();
			alert("Shepherd productivity multiplier increased by 2");
		} else {
			alert("Not enough money!");
		}
	});
	$("#shrrm1").click(function () {
		if (c >= 150000) {
			c -= 150000;
			shrrmulti++;
			$("#shrrm1").hide();
			alert("Shearer productivity multiplier increased by 1");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shrrm2").click(function () {
		if (c >= 400000) {
			c -= 400000;
			shrrmulti += 5;
			$("#shrrm2").hide();
			alert("Shearer productivity multiplier increased by 5");
		} else {
			alert("Not enough money!");
		}
	});
	$("#kntm1").click(function () {
		if (c >= 600000) {
			c -= 600000;
			kntmulti += 6;
			$("#kntm1").hide();
			alert("Knitter productivity multiplier increased by 6");
		} else {
			alert("Not enough money!");
		}
	});
	$("#sbomb").click(function () {
		if (c >= 2000000) {
			c -= 2000000;
			sbomb = true
			$("#sbomb").hide();
			alert("Sheep bomb equipped! Use 1 to throw. Gives you 300 random game assets (characters). Can be bought again.");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shepm2").click(function () {
		if (c >= 1000000) {
			c -= 1000000;
			shepmulti += 10;
			$("#shepm2").hide();
			alert("Shepherd productivity multiplier increased by 10");
		} else {
			alert("Not enough money!");
		}
	});

	$("#kntm2").click(function () {
		if (c >= 25000000) {
			c -= 25000000;
			kntmulti += 10;
			$("#kntm2").hide();
			alert("Knitter productivity multiplier increased by 10");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shrrm3").click(function () {
		if (c >= 50000000) {
			c -= 50000000;
			shepmulti += 20;
			$("#shrrm3").hide();
			alert("Shearer productivity multiplier increased by 20");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shrrm4").click(function () {
		if (c >= 144000000) {
			c -= 144000000;
			shrrmulti += 30;
			$("#shrrm4").hide();
			alert("Shearer productivity multiplier increased by 30");
		} else {
			alert("Not enough money!");
		}
	});


	$("#shepm3").click(function () {
		if (c >= 350000000) { //350M
			c -= 350000000;
			shepmulti += 40;
			$("#shepm3").hide();
			alert("Shepherd productivity multiplier increased by 40");
		} else {
			alert("Not enough money!");
		}
	});

	$("#kntm3").click(function () {
		if (c >= 470000000) { //350M
			c -= 470000000;
			kntmulti += 30;
			$("#kntm3").hide();
			alert("Knitter productivity multiplier increased by 30");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shrrm5").click(function () {
		if (c >= 650000000) {
			c -= 650000000;
			shrrmulti += 20;
			$("#shrrm5").hide();
			alert("Shearer productivity multiplier increased by 20");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shepm4").click(function () {
		if (c >= 900000000) { //350M
			c -= 900000000;
			shepmulti += 40;
			$("#shepm4").hide();
			alert("Shepherd productivity multiplier increased by 40");
		} else {
			alert("Not enough money!");
		}
	});

	$("#shrrm6").click(function () {
		if (c >= 2000000000) {
			c -= 2000000000;
			shrrmulti += 300;
			shepmulti += 300;
			$("#shrrm6").hide();
			alert("Shearer and Shepherd productivity multiplier increased by 300");
		} else {
			alert("Not enough money!");
		}
	});

	$("#kntm4").click(function () {
		if (c >= 150000000) { //350M
			c -= 150000000;
			kntmulti += 1000;
			$("#kntm4").hide();
			alert("Knitter productivity multiplier increased by 1000");
		} else {
			alert("Not enough money!");
		}
	});

	$("#ssm0").click(function () {
		if (c >= 10000000000) { //350M
			c -= 10000000000;
			ssmulti += 1;
			$("#ssm0").hide();
			alert("Sheep-sitter productivity multiplier increased by 1");
		} else {
			alert("Not enough money!");
		}
	});

	$("#ssm1").click(function () {
		if (c >= 25000000000) { //350M
			c -= 25000000000;
			ssmulti += 3;
			ssmulti += 4000;
			$("#ssm1").hide();
			alert("Sheep-sitter productivity multiplier increased by 3");
			alert("Shepherd productivity multiplier increased by 4000");
		} else {
			alert("Not enough money!");
		}
	});
});