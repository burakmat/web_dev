const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(morgan("tiny"))

app.get("/", (req, res) => {
	res.send("home")
})

app.listen(3000, () => {
	console.log("Open on port 3000")
})