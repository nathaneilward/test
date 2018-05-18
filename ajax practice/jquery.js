const people = document.getElementById("people");

fetch("https://swapi.co/api/people/")
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((person) => {
      const item = `<li>${person.name}</li>`;
      people.insertAdjacentHTML("beforeend", item);
    });
  });


// const movie_quotes = document.getElementById("movie_quotes");

// fetch("https://github.com/vilaboim/movie-quotes/blob/master/movie-quotes.json")
// //  .then(response => response.json())
//   .then((data) => {
//   console.log(data)
//     data.results.forEach((movie_quote) => {
//       const item = `<li>${movie_quote.name}</li>`;
//       movie_quotes.insertAdjacentHTML("beforeend", item);
//     });
//   });


