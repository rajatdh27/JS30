const audioPly = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  document
    .querySelector(`.key[data-key="${keyCode}"]`)
    .classList.add("playing");
  //   setTimeout(() => {
  //     document
  //       .querySelector(`.key[data-key="${keyCode}"]`)
  //       .classList.remove("playing");
  //   }, 70);

  audio.play();
};

const values = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const sounds = values.map((value) => {
  document
    .querySelector(`.key[data-key="${value}"]`)
    .addEventListener("click", (event) => {
      audioPly(value);
    });
});

const keys = document.querySelectorAll(".key");

function removeGlow(event) {
  if (event.propertyName !== "transform") return;
  console.log(this);
  this.classList.remove("playing");
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removeGlow);
});

window.addEventListener("keydown", (event) => {
  audioPly(event.keyCode);
});
