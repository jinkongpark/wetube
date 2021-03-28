import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// const express = require('express');
const app = express();

const PORT = 4000

// function hadleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
// function handleHome(req, res) {
//     res.send("Hello from home!")
// }
// function handleProfile(req, res) {
//     res.send("You are on my profile")
// }

const hadleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home!");
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, hadleListening);