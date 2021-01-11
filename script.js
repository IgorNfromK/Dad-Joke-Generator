const jokeElement = document.querySelector(".joke");

const jokeButton = document.querySelector("button");

async function fetchAJokeFromApi() {
  try {
    const api = "https://icanhazdadjoke.com";
    //API paramenters
    const params = {
      headers: {
        Accept: "application/json",
      },
    };
    //fetch data from API
    const response = await fetch(api, params);
    const data = await response.json();
    jokeElement.innerText = data.joke;
  } catch (error) {
    //error handling
    jokeElement.innerText = error;
  }
}
jokeButton.addEventListener("click", fetchAJokeFromApi);
window.addEventListener("load", fetchAJokeFromApi);
