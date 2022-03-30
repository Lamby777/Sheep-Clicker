import Decimal	from "./_decimal";
import {qstr}	from "./dx";

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

export const FPS		= 20;
export const FPS_DELAY	= 1000 / FPS;
export const dev		= qstr.parseQ()["dev"] === "1";
