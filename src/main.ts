import { movies } from "./movies";
const copiedMovies: [string, string, string, string, string[], string][] = [
  ...movies,
];
// const mainContainer = document.getElementById("main-content")!;
const container = document.getElementById("movie-container")!;

function displayMovies(inputMovies: string[]) {
  inputMovies.forEach((movie) => {
    // console.log(movie);
    const card = document.createElement("div") as HTMLElement;

    const titel = document.createElement("h2") as HTMLElement;
    titel.textContent = movie[0];
    card?.appendChild(titel);
    container.appendChild(card);

    const year = document.createElement("p") as HTMLElement;
    year.textContent = movie[1];
    card?.appendChild(year);

    const regie = document.createElement("p") as HTMLElement;
    regie.textContent = movie[2];
    card?.appendChild(regie);

    const time = document.createElement("p") as HTMLElement;
    time.textContent = movie[3];
    card?.appendChild(time);

    if (Array.isArray(movie[4])) {
      movie[4].forEach((genre) => {
        const innerP = document.createElement("p");
        innerP.textContent = genre;
        card.appendChild(innerP);
      });
    }

    const rate = document.createElement("p") as HTMLElement;
    rate.textContent = movie[5];
    card?.appendChild(rate);
  });
}

displayMovies(copiedMovies);

const filterUpButton = document.getElementById("year-up");

function filterByYear() {
  copiedMovies.sort((yearA, yearB) => {
    return Number(yearA[1]) - Number(yearB[1]);
  });

  reset();
  displayMovies(copiedMovies);
}

filterUpButton?.addEventListener("click", filterByYear);

function reset() {
  container.innerHTML = "";
}

const searchInput = document.getElementById("text") as HTMLInputElement;
const searchButton = document.getElementById("submit") as HTMLButtonElement;

function searchMovie() {
  const userInput = searchInput.value.toLowerCase();
  console.log(userInput);
  const filteredMovies = copiedMovies.filter((movie) => {
    console.log(movie);
    return movie[0].toLowerCase().includes(userInput);
  });
  console.log(filteredMovies);
  reset();
  displayMovies(filteredMovies);
}
searchButton.addEventListener("click", searchMovie);
