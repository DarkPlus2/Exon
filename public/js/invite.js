document.addEventListener('DOMContentLoaded', function() {
    // Get all invite buttons
    const inviteButtons = [
        document.getElementById('inviteBtn'),
        document.getElementById('mainInviteBtn'),
        document.getElementById('footerInviteBtn')
    ];
    
    // Bot invite link (replace with your actual bot client ID)
    const BOT_CLIENT_ID = 'YOUR_BOT_CLIENT_ID';
    const PERMISSIONS = '3145728'; // Permissions integer (manage server, voice, etc.)
    const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&permissions=${PERMISSIONS}&scope=bot%20applications.commands`;
    
    // Add click event to all invite buttons
    inviteButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(INVITE_URL, '_blank');
            });
        }
    });
    
    // Add Discord widget if needed
    const discordWidget = document.createElement('script');
    discordWidget.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    discordWidget.async = true;
    discordWidget.defer = true;
    discordWidget.onload = function() {
        new Crate({
            server: 'YOUR_SUPPORT_SERVER_ID',
            channel: 'YOUR_SUPPORT_CHANNEL_ID'
        });
    };
    document.body.appendChild(discordWidget);
});
