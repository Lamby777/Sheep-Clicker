import Decimal from "./_decimal";

export enum $Unit {
	SHEPHERD,
	SHEARER,
	KNITTER,
	BABYSITTER,
	PIZZAGUY,
}

export const DXB_PRESENCES = [
	" magical",		" mysterious",		" mystical",
	" dangerous",	"n adventurous",	" guiding",
	" fuzzy",		" wooly",
];

export const BLESSING_CAPS = [
	new Decimal("200_000_000"),
	new Decimal("1_000_000_000"),
	new Decimal("500_000_000_000"),
	new Decimal("2_000_000_000_000"),
	new Decimal("250_000_000_000_000"),
];
