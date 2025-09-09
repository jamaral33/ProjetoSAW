const audio = new Audio("src/assets/imagens/hamir.mp3");

document.getElementById("btnsom").addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play().catch(err => console.error("Erro ao tocar áudio:", err));
});