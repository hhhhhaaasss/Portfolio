//function for the music

window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.1;
  audio.play();
});

//function for the navigation bar

const nav = document.querySelector("#nav");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);

// function for the typewritter effect using vanilla javascript

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "HTML",
  "CSS",
  "JS",
  "Photoshop",
  "Premiere Pro",
  "After Effects",
];

const colors = ["orange", "blue", "yellow", "blue", "pink", "violet"];

const element = document.getElementById("typewritter");

let sleepTime = 90;

let curPhraseIndex = 0;

//function to write the text
const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      element.innerText = curWord.substring(0, i + 1);
      element.setAttribute("style", "color: " + colors[curPhraseIndex]);

      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    for (let i = curWord.length; i > 0; i--) {
      element.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

//animation for the marquee text using Jquery

$(".marquee-container").width($(".marquee-text").width());
