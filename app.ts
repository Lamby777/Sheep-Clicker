"use strict";

import Express from "express";

const app = Express();
app.use(Express.static(__dirname + "/public"));

app.get("/", (_req, res) => {
    res.render("main");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
