const emojiContainer = document.getElementById("emoji-rain");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = "📷";

  // Tamaño aleatorio
  const size = Math.random() * 24 + 20;
  emoji.style.fontSize = size + "px";

  // Posición horizontal aleatoria
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = "-50px";

  // Velocidad de caída
  const duration = Math.random() * 5 + 5; // entre 5 y 10 segundos
  emoji.style.animation = `fall ${duration}s linear`;

  emojiContainer.appendChild(emoji);

  // Eliminar cuando termine la animación
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

// Crear emojis constantemente
setInterval(createEmoji, 300);

/* Animación */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
  }
}
`;
document.head.appendChild(style);
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
  window.location.href = "minijuegos.html";
});
