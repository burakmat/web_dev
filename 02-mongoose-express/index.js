const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const Product = require("./models/product")

mongoose.connect("mongodb://localhost:27017/farmStand")
.then(() => {
	console.log("Mongo connection open.")
})
.catch(err => {
	console.log("Mongo connection error!", err)
})

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get("/products", async (req, res, next) => {
	const { category } = req.query
	if (category) {
		const products = await Product.find({ category })
		res.render("products/index", { products, category })
	} else {
		const products = await Product.find({})
		res.render("products/index", { products, category: "All" })

	}
})

app.post("/products", async (req, res, next) => {
	const product = new Product(req.body)
	await product.save()
	console.log(req.body)
	res.redirect(`/products/${ product._id }`)
})

app.get("/products/new", (req, res, next) => {
	res.render("products/new")
})

app.get("/products/:id", async (req, res, next) => {
	const { id } = req.params
	const product = await Product.findById(id)
	res.render("products/show", { product })
})

app.get("/products/:id/edit", async (req, res, next) => {
	const product = await Product.findById(req.params.id)
	res.render("products/edit", { product })
})

app.put("/products/:id", async (req, res, next) => {
	const { id } = req.params
	const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
	res.redirect(`/products/${product._id}`)
})

app.delete("/products/:id", async (req, res, next) => {
	const { id } = req.params
	await Product.findByIdAndDelete(id)
	res.redirect("/products")
})

app.listen(3000, () => {
	console.log("Listening on port 3000.")
})