// This app hosts the website for Carbonado
"use strict";

import Express	from "express";
import ejs		from "ejs";

const app = Express();
const {} = app.set("view engine", "ejs");
const {} = app.use(Express.static(__dirname + "/dist"));



const {} = app.get("/", (req, res) => {
	res.render("main");
});

const {} = app.get("/api", (req, res) => {
	res.render("api");
});

const {} = app.get("/conic", (req, res) => {
	res.render("conic");
});

const {} = app.listen(3000, () => {
	//
});
