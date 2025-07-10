document.addEventListener('DOMContentLoaded', () => {
    const commandsContainer = document.getElementById('commands-container');
    const commandSearch = document.getElementById('command-search');
    
    // Sample commands data - replace with your actual commands
    const commands = [
        { name: 'play', description: 'Play a song or playlist', usage: '!play <song/url>' },
        { name: 'skip', description: 'Skip the current song', usage: '!skip' },
        { name: 'queue', description: 'View the current queue', usage: '!queue' },
        { name: 'pause', description: 'Pause the current song', usage: '!pause' },
        { name: 'resume', description: 'Resume playback', usage: '!resume' },
        { name: 'volume', description: 'Adjust volume (1-100)', usage: '!volume 50' },
        { name: 'loop', description: 'Loop current song or queue', usage: '!loop [song/queue]' },
        { name: 'shuffle', description: 'Shuffle the queue', usage: '!shuffle' },
        { name: 'nowplaying', description: 'Show current song info', usage: '!nowplaying' },
        { name: 'lyrics', description: 'Get lyrics for current song', usage: '!lyrics' },
        { name: 'bassboost', description: 'Enable bass boost', usage: '!bassboost [on/off]' },
        { name: '24/7', description: 'Toggle 24/7 mode', usage: '!24/7' }
    ];
    
    function renderCommands(filter = '') {
        commandsContainer.innerHTML = '';
        
        const filteredCommands = commands.filter(cmd => 
            cmd.name.includes(filter.toLowerCase()) || 
            cmd.description.toLowerCase().includes(filter.toLowerCase())
        );
        
        if (filteredCommands.length === 0) {
            commandsContainer.innerHTML = `
                <div class="no-results">
                    <i class="ph ph-magnifying-glass"></i>
                    <p>No commands found matching "${filter}"</p>
                </div>
            `;
            return;
        }
        
        filteredCommands.forEach(cmd => {
            const commandCard = document.createElement('div');
            commandCard.className = 'command-card';
            commandCard.innerHTML = `
                <div class="command-header">
                    <h3>!${cmd.name}</h3>
                    <i class="ph ph-arrow-right"></i>
                </div>
                <p>${cmd.description}</p>
                <div class="command-usage">
                    <span>Usage:</span>
                    <code>${cmd.usage}</code>
                </div>
            `;
            commandsContainer.appendChild(commandCard);
        });
    }
    
    // Initial render
    renderCommands();
    
    // Search functionality
    commandSearch.addEventListener('input', (e) => {
        renderCommands(e.target.value);
    });
});
