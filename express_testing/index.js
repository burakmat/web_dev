const express = require("express");
// const colors = require("colors");
const app = express();

// console.dir(app);

// app.use((req, res) => {
// 	console.log("Got a new request");
// 	res.send("<h1>Good Looking Website</h1>");
// })

app.get("/r/:subreddit", (req, res) => {
	res.send(`<h1>Welcome to ${req.params.subreddit} Subreddit!</h1>`);
})

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
})

app.get("/info", (req, res) => {
	res.send("<h1>INFO PAGE</h1>");
})

app.get("/search", (req, res) => {
	const {q} = req.query;
	res.send(`<h1>You searched for ${q}</h1>`);
})

app.get("*", (req, res) => {
	res.send("<h1>Unknown Link</h1>");
})

app.listen(3000, () => {
	console.log("Listening for connections");
})