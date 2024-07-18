let birthdayCard = document.querySelector(".birthdayCard");
let cardFonts = document.querySelector(".cardFonts");
let happy = document.querySelector(".happy");

birthdayCard.addEventListener("click", function () {
  // console.log(this.id);
  let name = this.id;
  this.classList.toggle("rotate");
  cardFonts.classList.toggle("open");

  setTimeout(() => {
    happy.classList.toggle("invisible");
  }, 120);

  playAudio(name);
});

function playAudio(name) {
  let audio = new Audio(`assets/${name}.mp3`);
  audio.play();
}
