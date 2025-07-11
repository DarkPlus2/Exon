window.botCommands = [
    // Music Commands
    {
        name: 'play',
        description: 'Plays a song from YouTube, Spotify, SoundCloud, etc.',
        category: 'Music',
        aliases: ['p', 'playnow'],
        usage: '!play <song name or URL>',
        icon: 'play',
        permissions: []
    },
    {
        name: 'skip',
        description: 'Skips the currently playing song',
        category: 'Music',
        aliases: ['s', 'next'],
        usage: '!skip',
        icon: 'forward',
        permissions: []
    },
    {
        name: 'stop',
        description: 'Stops the music and clears the queue',
        category: 'Music',
        aliases: ['leave', 'disconnect', 'dc'],
        usage: '!stop',
        icon: 'stop',
        permissions: ['MANAGE_CHANNELS']
    },
    {
        name: 'pause',
        description: 'Pauses the currently playing song',
        category: 'Music',
        aliases: [],
        usage: '!pause',
        icon: 'pause',
        permissions: []
    },
    {
        name: 'resume',
        description: 'Resumes a paused song',
        category: 'Music',
        aliases: ['continue', 'unpause'],
        usage: '!resume',
        icon: 'play',
        permissions: []
    },
    {
        name: 'queue',
        description: 'Shows the current queue of songs',
        category: 'Music',
        aliases: ['q', 'list'],
        usage: '!queue [page]',
        icon: 'list',
        permissions: []
    },
    {
        name: 'nowplaying',
        description: 'Shows information about the currently playing song',
        category: 'Music',
        aliases: ['np', 'current', 'now'],
        usage: '!nowplaying',
        icon: 'music',
        permissions: []
    },
    {
        name: 'volume',
        description: 'Sets the volume of the music (1-100)',
        category: 'Music',
        aliases: ['vol'],
        usage: '!volume <number>',
        icon: 'volume-up',
        permissions: ['MANAGE_CHANNELS']
    },
    {
        name: 'loop',
        description: 'Loops the current song or queue',
        category: 'Music',
        aliases: ['repeat'],
        usage: '!loop [song/queue/off]',
        icon: 'redo',
        permissions: []
    },
    {
        name: 'shuffle',
        description: 'Shuffles the current queue',
        category: 'Music',
        aliases: ['mix', 'random'],
        usage: '!shuffle',
        icon: 'random',
        permissions: []
    },
    {
        name: 'search',
        description: 'Searches for a song and lets you choose from results',
        category: 'Music',
        aliases: ['find'],
        usage: '!search <song name>',
        icon: 'search',
        permissions: []
    },
    {
        name: 'lyrics',
        description: 'Gets lyrics for the current song or specified song',
        category: 'Music',
        aliases: ['lyric'],
        usage: '!lyrics [song name]',
        icon: 'quote-right',
        permissions: []
    },
    
    // Filter Commands
    {
        name: 'bassboost',
        description: 'Applies bass boost effect to the music',
        category: 'Filters',
        aliases: ['bass'],
        usage: '!bassboost [low/medium/high/off]',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: 'nightcore',
        description: 'Applies nightcore effect to the music',
        category: 'Filters',
        aliases: ['nc'],
        usage: '!nightcore [on/off]',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: 'vaporwave',
        description: 'Applies vaporwave effect to the music',
        category: 'Filters',
        aliases: ['vw'],
        usage: '!vaporwave [on/off]',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: '8d',
        description: 'Applies 8D audio effect to the music',
        category: 'Filters',
        aliases: [],
        usage: '!8d [on/off]',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: 'speed',
        description: 'Changes playback speed (0.5-2.0)',
        category: 'Filters',
        aliases: ['tempo'],
        usage: '!speed <value>',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: 'pitch',
        description: 'Changes pitch of the music (0.5-2.0)',
        category: 'Filters',
        aliases: [],
        usage: '!pitch <value>',
        icon: 'sliders-h',
        permissions: []
    },
    {
        name: 'reset',
        description: 'Resets all audio filters to default',
        category: 'Filters',
        aliases: ['normal', 'default'],
        usage: '!reset',
        icon: 'undo',
        permissions: []
    },
    
    // Playlist Commands
    {
        name: 'save',
        description: 'Saves the current queue as a playlist',
        category: 'Playlists',
        aliases: ['savequeue'],
        usage: '!save <playlist name>',
        icon: 'save',
        permissions: []
    },
    {
        name: 'load',
        description: 'Loads a saved playlist',
        category: 'Playlists',
        aliases: ['open', 'get'],
        usage: '!load <playlist name>',
        icon: 'folder-open',
        permissions: []
    },
    {
        name: 'playlists',
        description: 'Lists all saved playlists',
        category: 'Playlists',
        aliases: ['listplaylists'],
        usage: '!playlists',
        icon: 'list-ol',
        permissions: []
    },
    {
        name: 'delete',
        description: 'Deletes a saved playlist',
        category: 'Playlists',
        aliases: ['remove'],
        usage: '!delete <playlist name>',
        icon: 'trash',
        permissions: ['MANAGE_GUILD']
    },
    
    // Utility Commands
    {
        name: 'prefix',
        description: 'Sets or shows the current prefix for commands',
        category: 'Utility',
        aliases: [],
        usage: '!prefix [new prefix]',
        icon: 'hashtag',
        permissions: ['MANAGE_GUILD']
    },
    {
        name: 'help',
        description: 'Shows all commands or help for a specific command',
        category: 'Utility',
        aliases: ['h', 'commands'],
        usage: '!help [command name]',
        icon: 'question-circle',
        permissions: []
    },
    {
        name: 'ping',
        description: 'Shows the bot\'s latency',
        category: 'Utility',
        aliases: [],
        usage: '!ping',
        icon: 'tachometer-alt',
        permissions: []
    },
    {
        name: 'stats',
        description: 'Shows bot statistics',
        category: 'Utility',
        aliases: ['info', 'about'],
        usage: '!stats',
        icon: 'chart-bar',
        permissions: []
    },
    {
        name: 'invite',
        description: 'Sends the bot invite link',
        category: 'Utility',
        aliases: [],
        usage: '!invite',
        icon: 'robot',
        permissions: []
    },
    {
        name: 'support',
        description: 'Sends the support server invite',
        category: 'Utility',
        aliases: [],
        usage: '!support',
        icon: 'headset',
        permissions: []
    }
];
