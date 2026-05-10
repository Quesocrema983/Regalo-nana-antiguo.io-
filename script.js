const rain = document.getElementById("rain");

function createEmoji() {
  const emoji = document.createElement("div");

  emoji.classList.add("emoji");
  emoji.innerText = "📷";

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = (Math.random() * 20 + 20) + "px";

  const duration = Math.random() * 5 + 5;

  emoji.style.animationDuration = duration + "s";

  rain.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

setInterval(createEmoji, 300);