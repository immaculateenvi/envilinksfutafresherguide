// ========== MAIN.JS - SIMPLIFIED WITH HAMBURGER MENU ==========

// Theme Management
const themes = ['navy', 'red', 'green', 'purple', 'yellow', 'pink'];

function initTheme() {
    const savedTheme = localStorage.getItem('futaTheme') || 'navy';
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', changeTheme);
    }
}

function changeTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'navy';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('futaTheme', newTheme);
    
    // Update marquee gradient
    updateMarqueeGradient();
    
    // Show toast notification
    if (typeof showToast === 'function') {
        showToast(`Theme changed to ${newTheme}`, 'info');
    }
}

function updateMarqueeGradient() {
    const marqueeContainer = document.querySelector('.news-marquee-container');
    if (marqueeContainer) {
        const primary = getComputedStyle(document.body).getPropertyValue('--primary').trim();
        const primaryLight = getComputedStyle(document.body).getPropertyValue('--primary-light').trim();
        marqueeContainer.style.background = `linear-gradient(135deg, ${primary}, ${primaryLight})`;
    }
}

// Hamburger Menu Functions
function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (!hamburgerBtn || !navMenu) return;
    
    function openMenu() {
        hamburgerBtn.classList.add('active');
        navMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    hamburgerBtn.addEventListener('click', openMenu);
    
    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

// Online/Offline Status
function initOnlineStatus() {
    checkOnlineStatus();
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
}

function checkOnlineStatus() {
    const offlineStatus = document.getElementById('offline-status');
    if (!offlineStatus) {
        const offlineHTML = `
            <div id="offline-status" class="offline-status" style="display: none;">
                <i class="fas fa-wifi-slash"></i>
                <span>You are offline. Using saved data.</span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', offlineHTML);
    }
    handleOnlineStatus();
}

function handleOnlineStatus() {
    const offlineStatus = document.getElementById('offline-status');
    if (offlineStatus) {
        if (navigator.onLine) {
            offlineStatus.style.display = 'none';
        } else {
            offlineStatus.style.display = 'flex';
        }
    }
}

// Update Button
function initUpdateButton() {
    const updateBtn = document.getElementById('checkUpdateBtn');
    if (updateBtn && typeof checkForUpdates === 'function') {
        updateBtn.addEventListener('click', async function() {
            const btn = this;
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;
            
            await checkForUpdates(true);
            
            btn.innerHTML = originalHtml;
            btn.disabled = false;
        });
    }
}

// Service Worker Registration
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
                
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('New service worker found');
                    
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('New version available');
                            if (typeof checkForUpdates === 'function') {
                                checkForUpdates(true);
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('New service worker activated');
        });
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initHamburgerMenu();
    initOnlineStatus();
    initUpdateButton();
    initServiceWorker();
    
    // Update marquee gradient initially
    updateMarqueeGradient();
});