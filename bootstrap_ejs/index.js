const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/views")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home");
})

app.get("/cats", (req, res) => {
	const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
	res.render("cats", {cats});
})

app.get("/random", (req, res) => {
	const rand = Math.floor(Math.random() * 10) + 1;
	res.render("random", {rand});
})

app.get("/r/:subreddit", (req, res) => {
	const subData = redditData[req.params.subreddit];
	if (subData)
		res.render("subreddit", {...subData});
	else
		// res.send("<h1>Sorry, we couldn't find that subreddit</h1>");
		res.render("notfound", {subreddit: req.params.subreddit});
})

