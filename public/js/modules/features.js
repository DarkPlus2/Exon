document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.getElementById('features-container');
    
    const features = [
        {
            icon: 'ph ph-music-notes',
            title: 'Crystal Clear Audio',
            description: '256kbps high quality audio with no distortion or lag'
        },
        {
            icon: 'ph ph-playlist',
            title: 'Playlist Support',
            description: 'Full YouTube and Spotify playlist integration'
        },
        {
            icon: 'ph ph-equalizer',
            title: 'Audio Effects',
            description: 'Bass boost, nightcore, vaporwave and 8D audio'
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
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <i class="${feature.icon}"></i>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresContainer.appendChild(featureCard);
    });
});
