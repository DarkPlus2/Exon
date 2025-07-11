document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initBotStats();
    loadCommands();
    setupEventListeners();
    setupCommandSearch();
    setupMobileMenu();
    setupBackToTop();
    setupScrollAnimations();
    setupIntersectionObserver();
});

// Initialize bot statistics with animation
function initBotStats() {
    const counters = [
        { element: 'guilds-count', target: 1250, duration: 2000 },
        { element: 'users-count', target: 250000, duration: 2000 },
        { element: 'songs-count', target: 1500000, duration: 2000 }
    ];

    counters.forEach(counter => {
        animateCounter(counter.element, counter.target, counter.duration);
    });

    // Uptime is percentage-based
    document.getElementById('uptime').textContent = '99.9%';
}

// Animate counter values
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        
        // Format numbers
        let displayValue;
        if (target >= 1000000) {
            displayValue = (current / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
            displayValue = Math.floor(current / 1000) + 'K';
        } else {
            displayValue = Math.floor(current);
        }
        
        element.textContent = displayValue;
    }, 16);
}

// Load commands from config and display them
function loadCommands() {
    const commandsContainer = document.getElementById('commands-container');
    commandsContainer.innerHTML = '';
    
    const commands = window.botCommands;
    const categories = {};
    
    // Group commands by category
    commands.forEach(command => {
        if (!categories[command.category]) {
            categories[command.category] = [];
        }
        categories[command.category].push(command);
    });
    
    // Create sections for each category
    for (const [category, categoryCommands] of Object.entries(categories)) {
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title animate__animated';
        categoryTitle.textContent = category;
        commandsContainer.appendChild(categoryTitle);
        
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'commands-grid';
        
        // Create cards for each command in category
        categoryCommands.forEach((command, index) => {
            const commandCard = document.createElement('div');
            commandCard.className = 'command-card animate__animated';
            commandCard.style.animationDelay = `${index * 0.1}s`;
            
            let aliasesHTML = '';
            if (command.aliases && command.aliases.length > 0) {
                aliasesHTML = `
                    <div class="command-aliases">
                        Aliases: ${command.aliases.map(alias => `<span>${alias}</span>`).join('')}
                    </div>
                `;
            }
            
            let permissionsHTML = '';
            if (command.permissions) {
                permissionsHTML = `
                    <div class="command-permissions">
                        Requires: ${command.permissions.map(perm => `<span>${perm}</span>`).join('')}
                    </div>
                `;
            }
            
            commandCard.innerHTML = `
                <h3>${command.name} <i class="fas fa-${command.icon || 'terminal'}"></i></h3>
                <p>${command.description}</p>
                ${aliasesHTML}
                ${permissionsHTML}
                <div class="command-usage">Usage: ${command.usage}</div>
            `;
            
            categoryGrid.appendChild(commandCard);
        });
        
        commandsContainer.appendChild(categoryGrid);
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Desktop invite buttons
    document.getElementById('desktop-invite-btn').addEventListener('click', handleInviteClick);
    document.getElementById('hero-invite-btn').addEventListener('click', handleInviteClick);
    
    // Mobile invite button
    document.getElementById('sidebar-invite-btn').addEventListener('click', handleInviteClick);
    
    // Desktop support button
    document.getElementById('desktop-support-btn').addEventListener('click', handleSupportClick);
    
    // Mobile support button
    document.getElementById('sidebar-support-btn').addEventListener('click', handleSupportClick);
    
    // Premium button
    document.getElementById('premium-btn').addEventListener('click', handlePremiumClick);
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Handle invite button clicks
function handleInviteClick(e) {
    e.preventDefault();
    // Replace with your actual bot invite link
    window.open('https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=YOUR_PERMISSIONS&scope=bot', '_blank');
}

// Handle support button clicks
function handleSupportClick(e) {
    e.preventDefault();
    // Replace with your actual support server invite
    window.open('https://discord.gg/YOUR_INVITE_CODE', '_blank');
}

// Handle premium button clicks
function handlePremiumClick(e) {
    e.preventDefault();
    // Replace with your actual premium page
    window.open('https://patreon.com/YOUR_PAGE', '_blank');
}

// Handle newsletter form submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Here you would typically send the email to your backend
    // For demo purposes, we'll just show a success message
    showAlert('Thanks for subscribing!', 'success');
    emailInput.value = '';
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show alert message
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
}

// Setup command search functionality
function setupCommandSearch() {
    const searchInput = document.getElementById('command-search');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const commandCards = document.querySelectorAll('.command-card');
        
        commandCards.forEach(card => {
            const commandName = card.querySelector('h3').textContent.toLowerCase();
            const commandDesc = card.querySelector('p').textContent.toLowerCase();
            const commandUsage = card.querySelector('.command-usage').textContent.toLowerCase();
            
            if (commandName.includes(searchTerm) || 
                commandDesc.includes(searchTerm) || 
                commandUsage.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Handle category visibility
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

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('close-sidebar');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close when clicking on links
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Setup back to top button
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Add/remove scroll class to header
        const header = document.querySelector('.desktop-header');
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Setup Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animate elements
    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });
}
