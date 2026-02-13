// ========== VERSION.JS - COMPLETE UPDATE CHECKER ==========
const APP_VERSION = '3.0.0';
const VERSION_CHECK_URL = '/version.json?t=' + Date.now();

// Store version
localStorage.setItem('app_version', APP_VERSION);

// Update version display on all pages
document.addEventListener('DOMContentLoaded', function() {
    const versionDisplay = document.getElementById('versionDisplay');
    if (versionDisplay) {
        versionDisplay.textContent = 'v' + APP_VERSION;
    }
    
    checkForUpdates();
    
    // Check when coming back online
    window.addEventListener('online', checkForUpdates);
    
    // Auto-check every 6 hours
    setInterval(checkForUpdates, 21600000);
});

async function checkForUpdates(manual = false) {
    if (!navigator.onLine) {
        if (manual) showToast('You are offline. Connect to internet to check for updates.', 'warning');
        return;
    }

    try {
        const response = await fetch(VERSION_CHECK_URL);
        const data = await response.json();
        
        const currentVersion = localStorage.getItem('app_version');
        const lastUpdateCheck = localStorage.getItem('last_update_check');
        const now = Date.now();
        
        // Check if update is available
        if (data.version !== currentVersion) {
            if (data.forceUpdate) {
                showForceUpdateNotification(data.version, data.changes);
            } else if (manual || !lastUpdateCheck || now - parseInt(lastUpdateCheck) > 86400000) {
                localStorage.setItem('last_update_check', now.toString());
                showUpdateNotification(data.version, data.changes);
                
                // Show badge on update button
                const updateBadge = document.getElementById('updateBadge');
                if (updateBadge) {
                    updateBadge.style.display = 'flex';
                }
            }
        } else {
            if (manual) showToast('✓ You have the latest version', 'success');
            
            // Hide badge if up to date
            const updateBadge = document.getElementById('updateBadge');
            if (updateBadge) {
                updateBadge.style.display = 'none';
            }
        }
        
        // Update marquee with latest news if available
        if (data.news && data.news.length > 0) {
            updateMarquee(data.news);
        }
    } catch (error) {
        console.log('Version check failed:', error);
        if (manual) showToast('⚠ Could not check for updates', 'error');
    }
}

function showUpdateNotification(newVersion, changes) {
    // Remove existing notification
    const existing = document.getElementById('update-notification');
    if (existing) existing.remove();
    
    // Get theme colors
    const themeColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#003366';
    
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.innerHTML = `
        <div style="background: ${themeColor}; color: white; padding: 20px 24px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: ${changes?.length ? '12px' : '0'};">
                <div style="background: rgba(255,255,255,0.2); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-download" style="font-size: 1.5rem;"></i>
                </div>
                <div style="flex: 1;">
                    <strong style="font-size: 1.2rem;">New version available!</strong>
                    <div style="font-size: 0.9rem; opacity: 0.9;">Version ${newVersion}</div>
                </div>
            </div>
            ${changes?.length ? `
                <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; margin: 12px 0; font-size: 0.9rem;">
                    <ul style="margin: 0; padding-left: 20px;">
                        ${changes.map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="dismissUpdate()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 8px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    Later
                </button>
                <button onclick="updateApp()" style="background: white; color: ${themeColor}; border: none; padding: 8px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    Update Now
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
}

function showForceUpdateNotification(newVersion, changes) {
    const themeColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#003366';
    
    // Remove any existing notifications
    const existing = document.getElementById('update-notification');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'update-notification';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.8); z-index: 100000;
        display: flex; align-items: center; justify-content: center;
        animation: fadeIn 0.3s;
    `;
    modal.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 12px; max-width: 500px; width: 90%; text-align: center;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff6b6b; margin-bottom: 20px;"></i>
            <h3 style="color: ${themeColor}; margin-bottom: 10px;">Critical Update Required</h3>
            <p style="color: #666; margin-bottom: 20px;">Version ${newVersion} is available with important updates.</p>
            ${changes?.length ? `
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left;">
                    <strong style="color: ${themeColor};">What's new:</strong>
                    <ul style="margin: 10px 0 0; padding-left: 20px;">
                        ${changes.map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div style="margin-top: 20px;">
                <i class="fas fa-spinner fa-spin" style="color: ${themeColor};"></i>
                <p style="color: #666; margin-top: 10px;">Updating automatically...</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Auto-update after 2 seconds
    setTimeout(updateApp, 2000);
}

function showToast(message, type = 'info') {
    const themeColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#003366';
    const bgColor = type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : type === 'error' ? '#dc3545' : themeColor;
    const textColor = type === 'warning' ? '#333' : 'white';
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; background: ${bgColor}; 
        color: ${textColor}; padding: 12px 24px; border-radius: 8px; z-index: 9999; 
        animation: slideIn 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex; align-items: center; gap: 10px;
    `;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function updateMarquee(news) {
    const marquee = document.querySelector('.news-marquee-container marquee');
    if (marquee && news && news.length > 0) {
        let newsHTML = '';
        news.forEach(item => {
            newsHTML += `<span class="news-item">🎯 ${item}</span>`;
        });
        marquee.innerHTML = newsHTML;
    }
}

// Global functions
window.updateApp = function() {
    // Remove notifications
    document.getElementById('update-notification')?.remove();
    
    // Show progress
    const themeColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#003366';
    const progress = document.createElement('div');
    progress.id = 'update-progress';
    progress.innerHTML = `
        <div style="background: ${themeColor}; color: white; padding: 20px 30px; border-radius: 12px; z-index: 10001; display: flex; align-items: center; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
            <div>
                <div style="font-weight: bold;">Updating application...</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">Clearing old cache</div>
            </div>
        </div>
    `;
    document.body.appendChild(progress);
    
    // Clear old caches and reload
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== 'futa-guide-v3.0') {
                        console.log('Deleting cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Unregister old service workers
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    registrations.forEach(registration => registration.unregister());
                });
            }
            // Force reload from server
            window.location.reload(true);
        });
    } else {
        window.location.reload(true);
    }
};

window.dismissUpdate = function() {
    document.getElementById('update-notification')?.remove();
    localStorage.setItem('update_dismissed', Date.now().toString());
};