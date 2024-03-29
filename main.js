import "./style.css";
import { Alphabet } from "./constants/english-alphabet.js";

const keyArray = [...document.querySelectorAll(".key")];

/**
 * @description Create audio elements with data-key attribute.
 */
function createAudioElements() {
  Alphabet.forEach((letter, index) => {
    keyArray[index].setAttribute("data-key", Alphabet[index].key);
    const tempAudioElement = `
    <audio data-key="${letter.key}" src="/sounds/${letter.character}.mp3"></audio>
      `;
    const audiosElement = document.getElementById("audios");
    audiosElement.innerHTML += tempAudioElement;
  });
}

/**
 * @description Play audio for keydown event.
 * @param {Event} event
 */
function playAudioForKeyDown(event) {
  if ((event.keyCode < 65) | (event.keyCode > 90)) return;

  const audioElement = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const keyElement = document.querySelector(
    `.key[data-key="${event.keyCode}"]`
  );

  audioElement.currentTime = 0;
  audioElement.play();
  keyElement.classList.add("active");

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 300);
}

createAudioElements();
window.addEventListener("keydown", playAudioForKeyDown);
