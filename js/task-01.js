const list = document.querySelectorAll('.item');
console.log(list);
console.log("Number of categories:", list.length);
const firstEl = list[0];
console.log(firstEl.querySelector("h2").textContent);

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style);