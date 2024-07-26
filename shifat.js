let shifatButton = document.querySelector("#ShifatulButton");
let rotateText = document.querySelector("#rotateText");
rotateText.color = "black";
let textBox = document.querySelector("#textPrinterShifat");
shifatButton.addEventListener("click", () => {
  storyTeller();
});

let story = [
  "Hello there, my name Shifatul Gani. I am 17 years old and from Brooklyn, New York",
  "I am a rising senior and have a passion in Software Engineering",
  "I would say I am a decently timid person and am apart of a lot of clubs in my school",
  "The MSA",
  "The Muslim Student Association aims to further islamic knowledge in all kids who want to participate",
  "Weightlifting Club",
  "As the name suggests, I am one of the executives in the weightlifting club at my school",
  "My friend was originially the founder and decided to let me lead with him in this upcoming year",
  "[REDACTED] Codes",
  "[REDACTED] Codes is a club in my school that aims to further teach kids coding languages and be able to self teach",
  "The end",
];

let index = 0;
function storyTeller() {
  rotateText.textContent = story[index];
  textBox.style.display = "flex";
  index++;
  if (index == 12) {
      textBox.style.display = "none";
      index = 0;
  }
}