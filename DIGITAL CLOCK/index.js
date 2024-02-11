let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function changeBackgroundColor() {
  let doc = document.getElementById("hero");
  let color = ["black", "blue", "brown", "green", "red", "violet", "yellow", "brown", "pink"];
  doc.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  changeBackgroundColor();
}, 1000);






