let homeButton = [...document.querySelectorAll(".left-side button")];
let homeDisplay = document.querySelector(".left-side h3");

let homeNumber = 0;

homeButton[0].addEventListener("click", () => {
  homeNumber++;
  homeDisplay.textContent = homeNumber;
});
homeButton[1].addEventListener("click", () => {
  homeNumber += 2;
  homeDisplay.textContent = homeNumber;
});
homeButton[2].addEventListener("click", () => {
  homeNumber += 3;
  homeDisplay.textContent = homeNumber;
});

////////////

let AwayButton = [...document.querySelectorAll(".right-side button")];
let AwayDisplay = document.querySelector(".right-side h3");

let AwayNumber = 0;

AwayButton[0].addEventListener("click", () => {
  AwayNumber++;
  AwayDisplay.textContent = AwayNumber;
});
AwayButton[1].addEventListener("click", () => {
  AwayNumber += 2;
  AwayDisplay.textContent = AwayNumber;
});
AwayButton[2].addEventListener("click", () => {
  AwayNumber += 3;
  AwayDisplay.textContent = AwayNumber;
});

let resetButton = document.querySelector(".new-game");

resetButton.addEventListener("click", () => {
  homeNumber = 0;
  AwayNumber = 0;
  homeDisplay.textContent = homeNumber;
  AwayDisplay.textContent = AwayNumber;
});
