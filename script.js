const player1_btn = document.querySelector(".player1-btn");
const player2_btn = document.querySelector(".player2-btn");

function handleClick() {
  player1_btn.classList.toggle("active-btn");
  player2_btn.classList.toggle("active-btn");
}
