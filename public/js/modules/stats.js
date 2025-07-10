document.addEventListener('DOMContentLoaded', () => {
    // These would normally come from an API
    const stats = {
        servers: 12500,
        users: 5200000,
        songs: 58700000,
        uptime: 99.98
    };
    
    // Animate counters
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = value.toLocaleString() + (id === 'live-uptime' ? '%' : '+');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Start animations
    animateValue('live-servers', 0, stats.servers, 2000);
    animateValue('live-users', 0, stats.users, 2000);
    animateValue('live-songs', 0, stats.songs, 2000);
    animateValue('live-uptime', 0, stats.uptime, 2000);
});
