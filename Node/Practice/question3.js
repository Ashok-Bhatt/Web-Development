"use strict";

const { strict } = require("assert");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Home Page");
});

app.get("/about", (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.get("/user", (req, res)=>{
    const name = req.query.name || "Anonymous";
    const age = parseInt(req.query.age) || 10;
    const userInfo = {
        "name" : name,
        "age" : age
    }
    res.status(200).json(userInfo);
});

app.listen(3000, ()=>{
    console.log("App running on port 3000");
})