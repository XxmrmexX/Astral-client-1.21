const launchBtn = document.getElementById("launch-btn");
const statusEl = document.getElementById("status");

// Later, you'll put your Eaglercraft 1.21 files in /game/
const GAME_PATH = "game/index.html";

launchBtn.addEventListener("click", () => {
  statusEl.textContent = "Launching Astral Client…";

  // Open the game in the same tab
  window.location.href = GAME_PATH;
});
