document.addEventListener('DOMContentLoaded', () => {
  // These would normally come from an API
  const stats = {
    servers: 12500,
    users: 5200000,
    songs: 58700000
  };

  // Animate counters
  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      obj.innerHTML = value.toLocaleString() + '+';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Start animations
  animateValue('server-count', 0, stats.servers, 2000);
  animateValue('user-count', 0, stats.users, 2000);
  animateValue('song-count', 0, stats.songs, 2000);
  document.getElementById('live-uptime').innerHTML = '99.9%';

  // Simulate real-time updates (would be API in production)
  setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 10);
    stats.servers += randomIncrement;
    stats.users += randomIncrement * 100;
    stats.songs += randomIncrement * 1000;
    
    document.getElementById('server-count').innerHTML = stats.servers.toLocaleString() + '+';
    document.getElementById('user-count').innerHTML = stats.users.toLocaleString() + '+';
    document.getElementById('song-count').innerHTML = stats.songs.toLocaleString() + '+';
  }, 5000);
});
