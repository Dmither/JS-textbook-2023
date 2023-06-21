let field = document.querySelector(".field");
let ball = document.querySelector(".ball");

field.addEventListener("click", function (event) {
  let field = event.target.closest(".field");
  let fieldX = event.clientX - field.clientLeft - field.offsetLeft;
  let fieldY = event.clientY - field.clientTop - field.offsetTop;
  let x;
  let y;
  if (fieldX < ball.offsetWidth / 2) {
    x = 0;
  } else if (fieldX > field.clientWidth - ball.offsetWidth / 2) {
    x = field.clientWidth - ball.offsetWidth
  } else {
    x = fieldX - ball.offsetWidth / 2;
  }

  if (fieldY < ball.offsetHeight / 2) {
    y = 0;
  } else if (fieldY > field.clientHeight - ball.offsetHeight / 2) {
    y = field.clientHeight - ball.offsetHeight
  } else {
    y = fieldY - ball.offsetHeight / 2;
  }
  ball.style.left = x + "px";
  ball.style.top = y + "px";
});


let spoilerHead = document.querySelector(".spoiler-head");
let spoiler = document.querySelector(".spoiler");

spoilerHead.addEventListener("click", function(event){
  spoiler.classList.toggle("_active");
})

let cards = document.querySelectorAll(".card");
for(let card of cards) {
  card.lastElementChild.addEventListener("click", function(event) {
    card.style.display = "none";
  })
}