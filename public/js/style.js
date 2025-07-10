import { commands } from '/src/data/commands.js';
import { config } from '/src/data/config.js';

// Render Commands
const commandsContainer = document.getElementById("commands-container");
commands.forEach(cmd => {
  const card = document.createElement("div");
  card.className = "command-card";
  card.innerHTML = `
    <h3>/${cmd.name}</h3>
    <p><strong>Usage:</strong> ${cmd.usage}</p>
    <p>${cmd.description}</p>
  `;
  commandsContainer.appendChild(card);
});

// Render Stats
const statsContainer = document.getElementById("statistics-container");
statsContainer.innerHTML = `
  <p>✅ Servers: ${config.stats.servers}</p>
  <p>👥 Users: ${config.stats.users}</p>
  <p>🎵 Songs Played: ${config.stats.songs}</p>
`;
