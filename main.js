// Dark Mode Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeBtn = document.querySelector('.nav-actions .btn i.fa-moon, .nav-actions .btn i.fa-sun');
    if (themeBtn) {
        themeBtn.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Cart UI Update
function updateCartCount() {
    const cart = Storage.getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.cart-count');
    cartBadges.forEach(badge => {
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    });
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = `
        <i class="fas ${icon}" style="font-size: 18px;"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Global Search
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                const currentPage = window.location.pathname;
                if (currentPage.includes('/pages/')) {
                    window.location.href = `menu.html?search=${encodeURIComponent(searchInput.value)}`;
                } else {
                    window.location.href = `pages/menu.html?search=${encodeURIComponent(searchInput.value)}`;
                }
            }
        });
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .category-card').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Add ripple effect to buttons
function addRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateCartCount();
    initSearch();
    
    window.addEventListener('cartUpdated', updateCartCount);

    // Loading animation
    const loader = document.createElement('div');
    loader.className = 'loader-wrapper';
    loader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            setTimeout(() => loader.remove(), 500);
        }, 300);
    });

    // Add ripple to primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', addRippleEffect);
    });

    setTimeout(initScrollAnimations, 100);
});

// Ripple animation keyframes
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);
