document.addEventListener('DOMContentLoaded', function() {
    // Load bot stats
    loadBotStats();
    
    // Load commands from config
    loadCommands();
    
    // Setup event listeners
    setupEventListeners();
    
    // Command search functionality
    setupCommandSearch();
    
    // Mobile sidebar functionality
    setupMobileMenu();
});

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('close-sidebar');
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close sidebar when clicking on links
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function loadBotStats() {
    // These would normally come from an API
    document.getElementById('guilds-count').textContent = '1,250';
    document.getElementById('users-count').textContent = '250,000';
    document.getElementById('songs-count').textContent = '1.5M';
    document.getElementById('uptime').textContent = '99.9%';
}

function loadCommands() {
    const commandsContainer = document.getElementById('commands-container');
    commandsContainer.innerHTML = '';
    
    const commands = window.botCommands;
    const categories = {};
    
    commands.forEach(command => {
        if (!categories[command.category]) {
            categories[command.category] = [];
        }
        categories[command.category].push(command);
    });
    
    for (const [category, categoryCommands] of Object.entries(categories)) {
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        commandsContainer.appendChild(categoryTitle);
        
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
    // Desktop invite buttons
    document.getElementById('desktop-invite-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Discord invite link...');
    });
    
    document.getElementById('hero-invite-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Discord invite link...');
    });
    
    // Mobile invite button
    document.getElementById('sidebar-invite-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Discord invite link...');
    });
    
    // Desktop support button
    document.getElementById('desktop-support-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to support server...');
    });
    
    // Mobile support button
    document.getElementById('sidebar-support-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to support server...');
    });
    
    // Premium button
    document.getElementById('premium-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to premium page...');
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
