document.addEventListener('DOMContentLoaded', function() {
    const commandsContainer = document.getElementById('commandsContainer');
    const commandSearch = document.getElementById('commandSearch');
    
    const commands = [
        {
            name: 'play',
            description: 'Plays a song from YouTube, Spotify, or SoundCloud',
            usage: '!play <song name or URL>',
            aliases: ['p']
        },
        {
            name: 'skip',
            description: 'Skips the currently playing song',
            usage: '!skip',
            aliases: ['s', 'next']
        },
        {
            name: 'stop',
            description: 'Stops the music and clears the queue',
            usage: '!stop',
            aliases: ['disconnect', 'dc']
        },
        {
            name: 'queue',
            description: 'Shows the current music queue',
            usage: '!queue',
            aliases: ['q', 'list']
        },
        {
            name: 'pause',
            description: 'Pauses the currently playing song',
            usage: '!pause',
            aliases: []
        },
        {
            name: 'resume',
            description: 'Resumes a paused song',
            usage: '!resume',
            aliases: ['continue']
        },
        {
            name: 'volume',
            description: 'Changes the volume (1-100)',
            usage: '!volume <number>',
            aliases: ['vol']
        },
        {
            name: 'loop',
            description: 'Loops the current song or queue',
            usage: '!loop [song/queue/off]',
            aliases: ['repeat']
        },
        {
            name: 'shuffle',
            description: 'Shuffles the current queue',
            usage: '!shuffle',
            aliases: ['mix']
        },
        {
            name: 'nowplaying',
            description: 'Shows information about the currently playing song',
            usage: '!nowplaying',
            aliases: ['np', 'current']
        },
        {
            name: 'lyrics',
            description: 'Finds lyrics for the current song or specified song',
            usage: '!lyrics [song name]',
            aliases: ['ly']
        },
        {
            name: 'bassboost',
            description: 'Enables/disables bass boost effect',
            usage: '!bassboost [on/off]',
            aliases: ['bass']
        },
        {
            name: '24/7',
            description: 'Toggles 24/7 mode (keeps bot in channel)',
            usage: '!24/7',
            aliases: ['stay']
        },
        {
            name: 'search',
            description: 'Searches YouTube for a song and lets you choose',
            usage: '!search <song name>',
            aliases: ['find']
        },
        {
            name: 'move',
            description: 'Moves a song in the queue to a different position',
            usage: '!move <position> <new position>',
            aliases: ['mv']
        }
    ];

    function renderCommands(filter = '') {
        commandsContainer.innerHTML = '';
        
        const filteredCommands = commands.filter(cmd => 
            cmd.name.includes(filter.toLowerCase()) || 
            cmd.description.toLowerCase().includes(filter.toLowerCase()) ||
            cmd.aliases.some(alias => alias.includes(filter.toLowerCase()))
        );
        
        if (filteredCommands.length === 0) {
            commandsContainer.innerHTML = '<p class="no-results">No commands found matching your search.</p>';
            return;
        }
        
        filteredCommands.forEach(cmd => {
            const commandCard = document.createElement('div');
            commandCard.className = 'command-card';
            
            let aliasesText = '';
            if (cmd.aliases.length > 0) {
                aliasesText = `Aliases: ${cmd.aliases.map(a => `!${a}`).join(', ')}`;
            }
            
            commandCard.innerHTML = `
                <h3>!${cmd.name}</h3>
                <p>${cmd.description}</p>
                <div class="usage">${cmd.usage}</div>
                ${aliasesText ? `<p class="aliases">${aliasesText}</p>` : ''}
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
