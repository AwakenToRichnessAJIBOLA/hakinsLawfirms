// const movies = [
//   { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
//   { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
//   { title: "Parasite", genre: "Thriller", year: 2019, rating: 8.6 },
//   { title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6 },
//   { title: "Whiplash", genre: "Drama", year: 2014, rating: 8.5 },
//   { title: "Joker", genre: "Drama", year: 2019, rating: 8.4 },
//   { title: "Avengers: Endgame", genre: "Action", year: 2019, rating: 8.4 },
//   { title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 8.7 },
//   { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 },
//   { title: "Shutter Island", genre: "Thriller", year: 2010, rating: 8.2 },
// ];

// // Questions

// // 1. Loop through the array and log the titles of all movies to the console.

// movies.forEach((movie) => console.log(movie.title));

// // 2. Using the forEach method, log the genre and rating of each movie to the console.

// movies.forEach((movie) =>
//   console.log(`Genre: ${movie.genre}, Rating: ${movie.rating}`)
// );

// // 3. Using the map method, create a new array containing objects with only the title and rating of each movie, and log the new array to the console.

// const titleAndRating = movies.map((movie) => ({
//   title: movie.title,
//   rating: movie.rating,
// }));
// console.log(titleAndRating);

// // 4. Filter the array to get only movies released in or after the year 2010, and log the filtered array to the console.

// const moviesAfter2010 = movies.filter((movie) => movie.year >= 2010);
// console.log(moviesAfter2010);

// // 5. Find the first movie in the array with a rating higher than 9, and log its title to the console.

// const highRatedMovie = movies.find((movie) => movie.rating > 9);
// console.log(highRatedMovie.title);

// // 6. Using the filter method, get all movies in the "Sci-Fi" genre and log their titles to the console.

// const sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
// sciFiMovies.forEach((movie) => console.log(movie.title));

// // 7. Sort the movies by their ratings in descending order, and log the sorted array to the console.

// const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
// console.log(sortedMovies);

// // 8. Using the some method, check if there is any movie in the array with a rating lower than 8, and log the result (true or false) to the console.

// const hasLowRatedMovie = movies.some((movie) => movie.rating < 8);
// console.log(hasLowRatedMovie);

// // 9. Using the every method, check if all movies in the array have a rating of at least 8, and log the result (true or false) to the console.

// const allHighRated = movies.every((movie) => movie.rating >= 8);
// console.log(allHighRated);

// // 10. Create a shallow copy of the movies array and add a new movie object to the copied array. Log both the original and the modified arrays to the console.

// const newMoviesArray = [
//   ...movies,
//   { title: "New Movie", genre: "Genre", year: 2025, rating: 8.0 },
// ];
// console.log("Original Array:", movies);
// console.log("Modified Array:", newMoviesArray);

const movies = [
  { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
  { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { title: "Parasite", genre: "Thriller", year: 2019, rating: 8.6 },
  { title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6 },
  { title: "Whiplash", genre: "Drama", year: 2014, rating: 8.5 },
  { title: "Joker", genre: "Drama", year: 2019, rating: 8.4 },
  { title: "Avengers: Endgame", genre: "Action", year: 2019, rating: 8.4 },
  { title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 8.7 },
  { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 },
  { title: "Shutter Island", genre: "Thriller", year: 2010, rating: 8.2 },
];

// Questions

// 1. Log the genres of all movies to the console without repeating any genre.

const genress = new Set(movies.map((movie) => movie.genres));
console.log([...genress]);

// 2. Using the find method, get the first movie in the "Drama" genre and log its title to the console.

const FirstMovie = movies.find((movies) => movie.genre === "Drama");
console.log(FirstMovie.title);

// 3. Create a new array containing movies released before the year 2000 and log the array to the console.



// 4. Check if all movies in the "Action" genre have a rating of at least 8.4, and log the result (true or false) to the console.

// 5. Using the map method, create a new array of strings in the format: "Title (Year)" for each movie, and log the new array to the console.

// 6. Filter the movies array to include only movies with titles longer than 10 characters, and log the filtered array to the console.

// 7. Check if at least one movie in the array was released in the year 2014, and log the result (true or false) to the console.

// 8. Create a new array where each movie object has an additional property isClassic (true if released before 2000), and log the new array to the console.

// 9. Using the sort method, sort the movies alphabetically by their titles and log the sorted array to the console.

// 10. Create a new array that excludes movies with a rating lower than 8.5, and log both the original and new arrays to the console.
