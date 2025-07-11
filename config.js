// Bot configuration and commands data
window.botCommands = [
    {
        name: 'play',
        description: 'Plays a song from YouTube, Spotify, SoundCloud, etc.',
        category: 'Music',
        aliases: ['p'],
        usage: '!play <song name or URL>',
        icon: 'play'
    },
    {
        name: 'skip',
        description: 'Skips the currently playing song',
        category: 'Music',
        aliases: ['s', 'next'],
        usage: '!skip',
        icon: 'forward'
    },
    {
        name: 'stop',
        description: 'Stops the music and clears the queue',
        category: 'Music',
        aliases: ['leave', 'disconnect'],
        usage: '!stop',
        icon: 'stop'
    },
    {
        name: 'pause',
        description: 'Pauses the currently playing song',
        category: 'Music',
        aliases: [],
        usage: '!pause',
        icon: 'pause'
    },
    {
        name: 'resume',
        description: 'Resumes a paused song',
        category: 'Music',
        aliases: ['continue'],
        usage: '!resume',
        icon: 'play'
    },
    {
        name: 'queue',
        description: 'Shows the current queue of songs',
        category: 'Music',
        aliases: ['q'],
        usage: '!queue',
        icon: 'list'
    },
    {
        name: 'nowplaying',
        description: 'Shows information about the currently playing song',
        category: 'Music',
        aliases: ['np', 'current'],
        usage: '!nowplaying',
        icon: 'music'
    },
    {
        name: 'volume',
        description: 'Sets the volume of the music (1-100)',
        category: 'Music',
        aliases: ['vol'],
        usage: '!volume <number>',
        icon: 'volume-up'
    },
    {
        name: 'loop',
        description: 'Loops the current song or queue',
        category: 'Music',
        aliases: ['repeat'],
        usage: '!loop [song/queue/off]',
        icon: 'redo'
    },
    {
        name: 'shuffle',
        description: 'Shuffles the current queue',
        category: 'Music',
        aliases: ['mix'],
        usage: '!shuffle',
        icon: 'random'
    },
    {
        name: 'search',
        description: 'Searches for a song and lets you choose from results',
        category: 'Music',
        aliases: ['find'],
        usage: '!search <song name>',
        icon: 'search'
    },
    {
        name: 'lyrics',
        description: 'Gets lyrics for the current song or specified song',
        category: 'Music',
        aliases: ['lyric'],
        usage: '!lyrics [song name]',
        icon: 'quote-right'
    },
    {
        name: 'bassboost',
        description: 'Applies bass boost effect to the music',
        category: 'Filters',
        aliases: ['bass'],
        usage: '!bassboost [low/medium/high/off]',
        icon: 'sliders-h'
    },
    {
        name: 'nightcore',
        description: 'Applies nightcore effect to the music',
        category: 'Filters',
        aliases: ['nc'],
        usage: '!nightcore [on/off]',
        icon: 'sliders-h'
    },
    {
        name: 'vaporwave',
        description: 'Applies vaporwave effect to the music',
        category: 'Filters',
        aliases: ['vw'],
        usage: '!vaporwave [on/off]',
        icon: 'sliders-h'
    },
    {
        name: '8d',
        description: 'Applies 8D audio effect to the music',
        category: 'Filters',
        aliases: [],
        usage: '!8d [on/off]',
        icon: 'sliders-h'
    },
    {
        name: 'prefix',
        description: 'Sets or shows the current prefix for commands',
        category: 'Settings',
        aliases: [],
        usage: '!prefix [new prefix]',
        icon: 'hashtag'
    },
    {
        name: 'help',
        description: 'Shows all commands or help for a specific command',
        category: 'Utility',
        aliases: ['h', 'commands'],
        usage: '!help [command name]',
        icon: 'question-circle'
    },
    {
        name: 'ping',
        description: 'Shows the bot\'s latency',
        category: 'Utility',
        aliases: [],
        usage: '!ping',
        icon: 'tachometer-alt'
    },
    {
        name: 'stats',
        description: 'Shows bot statistics',
        category: 'Utility',
        aliases: ['info', 'about'],
        usage: '!stats',
        icon: 'chart-bar'
    }
];
