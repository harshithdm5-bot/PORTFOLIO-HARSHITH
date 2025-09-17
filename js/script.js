// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initProjectFiltering();
    initProjectModal();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Active nav link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initialize on load
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Project filtering functionality
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter, projectCards);
        });
    });
}

function filterProjects(filter, projectCards) {
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Project modal functionality
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');

    // Project data (you can expand this with your actual project details)
    const projectData = {
        '1': {
            title: 'Smart Home Controller',
            image: 'images/project1-placeholder.jpg',
            description: 'A comprehensive Arduino-based home automation system that allows users to control various home appliances through a mobile application. The system includes temperature monitoring, lighting control, security features, and energy monitoring.',
            features: [
                'WiFi connectivity for remote control',
                'Mobile app for Android and iOS',
                'Temperature and humidity sensors',
                'Smart lighting control',
                'Security system integration',
                'Energy consumption monitoring'
            ],
            technologies: ['Arduino', 'ESP32', 'Flutter', 'Firebase', 'C++', 'IoT'],
            github: 'https://github.com/demo-user/smart-home-controller',
            demo: 'https://smart-home-demo.netlify.app'
        },
        '2': {
            title: 'Circuit Simulator',
            image: 'images/project2-placeholder.jpg',
            description: 'An educational web-based circuit simulation tool that helps students and engineers visualize and understand electronic circuits. Built with HTML5 Canvas and JavaScript for real-time circuit analysis.',
            features: [
                'Drag-and-drop circuit components',
                'Real-time circuit analysis',
                'Oscilloscope visualization',
                'Component library with 50+ components',
                'Save and share circuit designs',
                'Educational tutorials and examples'
            ],
            technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Node.js', 'WebGL'],
            github: 'https://github.com/demo-user/circuit-simulator',
            demo: 'https://circuit-simulator-demo.netlify.app'
        },
        '3': {
            title: 'LED Matrix Display',
            image: 'images/project3-placeholder.jpg',
            description: 'A custom-designed PCB featuring a programmable LED matrix display system. Includes multiple visual effects, text scrolling capabilities, and wireless control through smartphone integration.',
            features: [
                'Custom PCB design',
                '64x32 LED matrix display',
                'Multiple visual effects and animations',
                'Text scrolling and image display',
                'Bluetooth connectivity',
                'Mobile app control interface'
            ],
            technologies: ['PCB Design', 'Microcontroller', 'Bluetooth', 'Mobile App', 'C Programming'],
            github: 'https://github.com/demo-user/led-matrix-display',
            demo: 'https://led-matrix-demo.netlify.app'
        }
    };

    // Open modal
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                displayProjectDetails(project, modalContent);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function displayProjectDetails(project, container) {
    container.innerHTML = `
        <h2>${project.title}</h2>
        <div class="modal-project-content">
            <div class="modal-project-image">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin-bottom: 20px; background: #f0f0f0;">
            </div>
            <div class="modal-project-info">
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">${project.description}</p>
                
                <h3 style="color: #2c3e50; margin-bottom: 15px;">Key Features</h3>
                <ul style="margin-bottom: 20px; padding-left: 20px;">
                    ${project.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
                </ul>
                
                <h3 style="color: #2c3e50; margin-bottom: 15px;">Technologies Used</h3>
                <div class="modal-tech-tags" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                    ${project.technologies.map(tech => `
                        <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">${tech}</span>
                    `).join('')}
                </div>
                
                <div class="modal-links" style="display: flex; gap: 15px;">
                    <a href="${project.github}" class="btn btn-secondary" target="_blank" style="text-decoration: none;">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <a href="${project.demo}" class="btn btn-primary" target="_blank" style="text-decoration: none;">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.project-card, .book-card, .section-title');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// CSS for fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(fadeInStyle);

// Utility function to add loading states
function setLoading(element, isLoading) {
    if (isLoading) {
        element.style.opacity = '0.7';
        element.style.pointerEvents = 'none';
    } else {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
}

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});