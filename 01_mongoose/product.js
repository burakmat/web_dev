const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

const movieAppSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
		}
	}
)

const Movie = mongoose.model("Movie", movieAppSchema);

const movie = new Movie({name: "deneme", price: 10});
movie.save()
.then(data => console.log(data))
.catch(err=>console.log(err));