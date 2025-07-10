// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on theme
if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
});

// Features Loader
const featuresContainer = document.getElementById('features-container');
const features = [
    {
        icon: 'ph ph-music-notes',
        title: 'Crystal Clear Audio',
        description: '256kbps high quality audio with no distortion'
    },
    {
        icon: 'ph ph-playlist',
        title: 'Playlist Support',
        description: 'Full YouTube and Spotify playlist integration'
    },
    {
        icon: 'ph ph-equalizer',
        title: 'Audio Effects',
        description: 'Bass boost, nightcore, vaporwave and more'
    },
    {
        icon: 'ph ph-clock',
        title: '24/7 Mode',
        description: 'Keep music playing even when you leave'
    },
    {
        icon: 'ph ph-shuffle',
        title: 'Smart Queue',
        description: 'Advanced queue management with shuffling'
    },
    {
        icon: 'ph ph-microphone',
        title: 'Lyrics',
        description: 'Automatic lyrics display for current songs'
    }
];

features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card fade-in';
    featureCard.innerHTML = `
        <i class="${feature.icon}"></i>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;
    featuresContainer.appendChild(featureCard);
});

// Commands Search System
const commandsContainer = document.getElementById('commands-container');
const commandSearch = document.getElementById('command-search');

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
            <div class="command-card">
                <p>No commands found matching "${filter}"</p>
            </div>
        `;
        return;
    }
    
    filteredCommands.forEach(cmd => {
        const commandCard = document.createElement('div');
        commandCard.className = 'command-card fade-in';
        commandCard.innerHTML = `
            <h3>!${cmd.name}</h3>
            <p>${cmd.description}</p>
            <div class="command-usage">
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

// Invite Button
const inviteBtn = document.getElementById('invite-btn');
inviteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with your bot's invite link
    window.open('https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands', '_blank');
});

// Animate elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
