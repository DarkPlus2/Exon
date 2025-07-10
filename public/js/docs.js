document.addEventListener('DOMContentLoaded', function() {
    const docsContainer = document.getElementById('docsContainer');
    
    const documentation = [
        {
            title: 'Getting Started',
            content: `
                <p>To get started with Ultimate Music Bot, simply invite it to your server using the invite button above. Once added, you can start playing music immediately with the !play command.</p>
                <p><strong>Basic Requirements:</strong></p>
                <ul>
                    <li>Bot must have "Connect" and "Speak" permissions in your voice channel</li>
                    <li>You need to be in a voice channel to use music commands</li>
                    <li>For advanced features, the bot may need additional permissions</li>
                </ul>
            `
        },
        {
            title: 'Premium Features',
            content: `
                <p>Ultimate Music Bot offers premium features for enhanced music experience:</p>
                <ul>
                    <li><strong>High Quality Audio:</strong> 256kbps audio streaming</li>
                    <li><strong>Audio Effects:</strong> Bass boost, nightcore, vaporwave and more</li>
                    <li><strong>24/7 Mode:</strong> Keep music playing continuously</li>
                    <li><strong>Playlist Support:</strong> Full YouTube/Spotify playlist playback</li>
                    <li><strong>Multi-Platform:</strong> Supports YouTube, Spotify, SoundCloud and more</li>
                </ul>
                <p>Some premium features may require a premium subscription.</p>
            `
        },
        {
            title: 'Troubleshooting',
            content: `
                <p><strong>Common Issues and Solutions:</strong></p>
                <ul>
                    <li><strong>Bot not joining voice channel:</strong> Check that the bot has proper permissions and that your voice channel isn't full</li>
                    <li><strong>Music not playing:</strong> Try re-inviting the bot with all required permissions</li>
                    <li><strong>Laggy playback:</strong> This could be due to your internet connection or high server load</li>
                    <li><strong>Commands not working:</strong> Make sure you're using the correct command prefix (default is !)</li>
                </ul>
                <p>For further assistance, join our support server.</p>
            `
        },
        {
            title: 'Advanced Configuration',
            content: `
                <p>Server administrators can configure various bot settings:</p>
                <ul>
                    <li><strong>!prefix:</strong> Change the bot's command prefix</li>
                    <li><strong>!djrole:</strong> Set a DJ role for restricted commands</li>
                    <li><strong>!autoplay:</strong> Enable automatic playlist continuation</li>
                    <li><strong>!defaultvolume:</strong> Set default volume for your server</li>
                </ul>
                <p>These commands require Administrator permissions or a designated DJ role.</p>
            `
        }
    ];
    
    documentation.forEach(doc => {
        const docCard = document.createElement('div');
        docCard.className = 'doc-card';
        docCard.innerHTML = `
            <h3>${doc.title}</h3>
            ${doc.content}
        `;
        docsContainer.appendChild(docCard);
    });
});
