console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
const emptyStarSrc = "./assets/star-empty.svg";
const filledStarSrc = "./assets/star-filled.svg";

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const starImg = document.createElement("img");
    if (i <= filledStars) {
      starImg.src = filledStarSrc;
    } else {
      starImg.src = emptyStarSrc;
    }
    starImg.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.appendChild(starImg);
  }
}

renderStars(0);
