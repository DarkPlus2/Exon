document.addEventListener('DOMContentLoaded', () => {
  const featuresContainer = document.getElementById('features-container');
  
  const features = [
    {
      icon: 'ph ph-music-notes',
      title: 'High Quality Audio',
      description: 'Crystal clear 256kbps audio streaming'
    },
    {
      icon: 'ph ph-playlist',
      title: 'Playlist Support',
      description: 'Play YouTube and Spotify playlists seamlessly'
    },
    {
      icon: 'ph ph-equalizer',
      title: 'Audio Effects',
      description: 'Bass boost, nightcore and more audio filters'
    },
    {
      icon: 'ph ph-clock',
      title: '24/7 Mode',
      description: 'Keep music playing continuously'
    },
    {
      icon: 'ph ph-shuffle',
      title: 'Queue Management',
      description: 'Advanced queue controls and shuffling'
    },
    {
      icon: 'ph ph-microphone',
      title: 'Lyrics',
      description: 'Automatic lyrics display for current songs'
    }
  ];

  features.forEach((feature, index) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card fade-in';
    featureCard.style.animationDelay = `${index * 0.1}s`;
    featureCard.innerHTML = `
      <i class="${feature.icon}"></i>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;
    featuresContainer.appendChild(featureCard);
  });
});
