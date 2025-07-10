module.exports = {
    // Bot Token
    token: process.env.DISCORD_TOKEN || 'YOUR_BOT_TOKEN',
    
    // Default prefix
    prefix: '!',
    
    // Bot owners (for eval and other owner commands)
    owners: ['YOUR_DISCORD_ID'],
    
    // Spotify credentials (for Spotify support)
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID || '',
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET || ''
    },
    
    // Database configuration
    database: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/ultimate-music-bot',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    
    // Lavalink nodes (for advanced audio)
    lavalink: [
        {
            host: 'localhost',
            port: 2333,
            password: 'youshallnotpass',
            retryAmount: 5,
            retryDelay: 1000
        }
    ],
    
    // Embed colors
    colors: {
        default: '#5865F2',
        success: '#57F287',
        error: '#ED4245',
        warning: '#FEE75C'
    },
    
    // API keys
    apis: {
        genius: process.env.GENIUS_API_KEY || '', // For lyrics
        youtube: process.env.YOUTUBE_API_KEY || '' // For better YouTube search
    },
    
    // Bot status
    status: {
        type: 'LISTENING', // PLAYING, LISTENING, WATCHING, STREAMING
        message: '{prefix}help | {guilds} servers'
    },
    
    // Logging
    logging: {
        level: 'debug', // error, warn, info, debug
        webhook: process.env.LOG_WEBHOOK || '' // For error logging
    },
    
    // Feature toggles
    features: {
        dashboard: true,
        webServer: {
            enabled: true,
            port: 8080
        },
        spotify: true,
        soundcloud: true
    }
};
