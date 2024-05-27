import { fetchRandomDog } from "./api.js";
import { displayDogImage, addToFavorites } from "./gallery.js";

document.getElementById("fetch-dog").addEventListener("click", async () => {
  const dogImageUrl = await fetchRandomDog();
  if (dogImageUrl) {
    displayDogImage(dogImageUrl);
  }
});

document.getElementById("dog-gallery").addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const url = event.target.src;
    addToFavorites(url);
  }
});
