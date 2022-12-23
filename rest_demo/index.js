const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const { v4: uuid } = require('uuid'); //For generating ID's
const metOr = require("method-override");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(metOr("_method"));

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

app.get("/comments", (req, res) => {
	res.render("index", {comments});
});

app.get("/comments/new", (req, res) => {
	res.render("new");
});

app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({username, comment, id: uuid()});
	res.redirect("/comments");
})

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find(c => c.id === id);
	res.render("show", {...comment});
});

app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const comment = comments.find(c => c.id === id);
	res.render("edit", {...comment});
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const com = comments.find(c => c.id === id);
	com.comment = req.body.comment;
	// res.send("<h1>Being updated</h1>");
	res.redirect("/comments");
})

app.delete("/comments/:id", (req, res) => {
	const { id } = req.params;
	comments = comments.filter((c) => c.id !== id);
	res.redirect("/comments");
});


app.get("/tacos", (req, res) => {
	console.log("get requested");
	res.send("Get /tacos");
});

app.post("/tacos", (req, res) => {
	console.log("Post requested");
	res.send("Post /tacos");
});