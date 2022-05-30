const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world from the express");
});

app.listen(8000, () => {
    console.log("listing the port at 8000");
});