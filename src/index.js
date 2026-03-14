// src/index.js

const engine = initializeEngine();

loadGameConfiguration().then((config) => {
  engine.start(config);
});

function initializeEngine() {
  console.log("Engine initialized");

  return {
    start: startEngineLoop,
  };
}

async function loadGameConfiguration() {
  const response = await fetch("./src/config/game.json");
  const config = await response.json();

  console.log("Game configuration loaded:", config);

  return config;
}

function startEngineLoop(config) {
  const root = document.getElementById("root");

  let score = 0;

  function renderGame() {
    root.innerHTML = "";

    const container = document.createElement("div");
    container.className = "game-container";

    const header = document.createElement("div");
    header.className = "header";
    header.innerText = "Score: " + score;

    const grid = document.createElement("div");
    grid.className = "grid";

    for (let i = 0; i < config.gridSize * config.gridSize; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.innerText = "?";

      const correct = Math.random() > 0.7;

      cell.onclick = () => {
        if (correct) {
          score += config.pointsPerCorrect;
          renderGame();
        }
      };

      grid.appendChild(cell);
    }

    container.appendChild(header);
    container.appendChild(grid);

    root.appendChild(container);
  }

  renderGame();

  function loop() {
    requestAnimationFrame(loop);
  }

  loop();
}
