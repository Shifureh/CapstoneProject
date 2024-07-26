let button = document.getElementById("theButton");
let text = document.getElementById("theText");

button.addEventListener("click", () => {
    text.textContent = quoteArray[Math.floor(Math.random() * quoteArray.length)];
});

let quoteArray = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. -Steve Jobs",
  "Only those who will risk going too far can possibly find out how far one can go - T.S. Eliot",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
  "It is during our darkest moments that we must focus to see the light. -Aristotle",
  "Be yourself; everyone else is already taken. -Oscar Wilde",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
  "The ones who are crazy enough to think they can change the world are the ones who do. -Steve Jobs",
  "Someone is sitting in the shade today because someone planted a tree a long time ago. -Warren Buffet",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. -Pele"
];