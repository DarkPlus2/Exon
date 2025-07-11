document.addEventListener('DOMContentLoaded', function() {
    // Load bot stats
    loadBotStats();
    
    // Load commands from config
    loadCommands();
    
    // Setup event listeners
    setupEventListeners();
    
    // Command search functionality
    setupCommandSearch();
});

function loadBotStats() {
    // These would normally come from an API
    // For demo purposes, we'll use static values
    document.getElementById('guilds-count').textContent = '1,250';
    document.getElementById('users-count').textContent = '250,000';
    document.getElementById('songs-count').textContent = '1.5M';
    document.getElementById('uptime').textContent = '99.9%';
}

function loadCommands() {
    const commandsContainer = document.getElementById('commands-container');
    commandsContainer.innerHTML = '';
    
    // Get commands from config
    const commands = window.botCommands;
    
    // Group commands by category
    const categories = {};
    commands.forEach(command => {
        if (!categories[command.category]) {
            categories[command.category] = [];
        }
        categories[command.category].push(command);
    });
    
    // Create sections for each category
    for (const [category, categoryCommands] of Object.entries(categories)) {
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        commandsContainer.appendChild(categoryTitle);
        
        // Create grid for commands in this category
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'commands-grid';
        
        categoryCommands.forEach(command => {
            const commandCard = document.createElement('div');
            commandCard.className = 'command-card';
            
            let aliasesHTML = '';
            if (command.aliases && command.aliases.length > 0) {
                aliasesHTML = `
                    <div class="command-aliases">
                        ${command.aliases.map(alias => `<span>${alias}</span>`).join('')}
                    </div>
                `;
            }
            
            commandCard.innerHTML = `
                <h3>${command.name} <i class="fas fa-${command.icon || 'terminal'}"></i></h3>
                <p>${command.description}</p>
                ${aliasesHTML}
                <div class="command-usage">${command.usage}</div>
            `;
            
            categoryGrid.appendChild(commandCard);
        });
        
        commandsContainer.appendChild(categoryGrid);
    }
}

function setupEventListeners() {
    // Invite button
    document.getElementById('invite-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Discord invite link...');
        // window.location.href = 'https://discord.com/oauth2/authorize...';
    });
    
    document.getElementById('hero-invite-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Discord invite link...');
        // window.location.href = 'https://discord.com/oauth2/authorize...';
    });
    
    // Support button
    document.getElementById('support-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to support server...');
        // window.location.href = 'https://discord.gg/...';
    });
    
    // Premium button
    document.getElementById('premium-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to premium page...');
        // window.location.href = 'https://patreon.com/...';
    });
}

function setupCommandSearch() {
    const searchInput = document.getElementById('command-search');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const commandCards = document.querySelectorAll('.command-card');
        
        commandCards.forEach(card => {
            const commandName = card.querySelector('h3').textContent.toLowerCase();
            const commandDesc = card.querySelector('p').textContent.toLowerCase();
            
            if (commandName.includes(searchTerm) || commandDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide/show category titles based on visible commands
        document.querySelectorAll('.category-title').forEach(title => {
            const categoryGrid = title.nextElementSibling;
            const visibleCommands = categoryGrid.querySelectorAll('.command-card[style="display: block;"]').length;
            
            if (visibleCommands > 0 || searchTerm === '') {
                title.style.display = 'block';
                categoryGrid.style.display = 'grid';
            } else {
                title.style.display = 'none';
                categoryGrid.style.display = 'none';
            }
        });
    });
}
