const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
	console.log("Connection open\n");
}).catch(err => {
	console.log("Connection close\n", err);
})

const movieSchema = new mongoose.Schema(
	{
		title: String,
		year: Number,
		score: Number,
		rating: String
	}
);

// movieSchema.methods.function;// to declare intsance method
// movieSchema.statics.function;// to declare static schema function

// const Movie = mongoose.model("Movie", movieSchema);// automatically creates "movies" collection
// const sample = new Movie(
// 	{
// 		title: "Cars",
// 		year: 2008,
// 		score: 100,
// 		rating: "R"
// 	}
// );

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then((data)=>{console.log("Inserted"); console.log(data)})

// Movie.update({year: 2001}, {year: 2000})
// Movie.findOne({score: {$gt: 8.5}}).then(data=>console.log(data))