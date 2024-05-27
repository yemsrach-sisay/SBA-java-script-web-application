export function displayDogImage(url) {
  const gallery = document.getElementById("dog-gallery");
  gallery.innerHTML = `<img src="${url}" alt="Random Dog">`;
}

export function addToFavorites(url) {
  const favoritesList = document.getElementById("favorite-list");
  const listItem = document.createElement("li");
  listItem.innerHTML = `<img src="${url}" alt="Favorite Dog">`;
  favoritesList.appendChild(listItem);
}
