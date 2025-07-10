// Initialize particle canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle system
const particles = [];
const particleCount = window.innerWidth < 768 ? 30 : 60;

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Create particles
function init() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    // Connect particles
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(200, 70%, 60%, ${1 - distance / 100})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  
  requestAnimationFrame(animate);
}

// Handle resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start animation
init();
animate();
