// Site Configuration - Change the app name here and it updates everywhere
const SITE_CONFIG = {
    appName: 'MY FIRE JOURNEY',
    tagline: 'Your path to financial independence',
    copyright: '2026',
    disclaimer: 'This app is for educational and informational purposes only. We are not professional financial advisors. Please consult a qualified financial advisor before making any investment decisions.'
};

// Apply config to all pages
document.addEventListener('DOMContentLoaded', () => {
    // Update logo text
    document.querySelectorAll('.logo-text').forEach(el => {
        el.textContent = SITE_CONFIG.appName;
    });

    // Update copyright
    document.querySelectorAll('.footer-bottom p:first-child').forEach(el => {
        if (el.textContent.includes('©')) {
            el.innerHTML = `&copy; ${SITE_CONFIG.copyright} ${SITE_CONFIG.appName}. All rights reserved.`;
        }
    });

    // Update disclaimer
    document.querySelectorAll('.disclaimer').forEach(el => {
        el.textContent = SITE_CONFIG.disclaimer;
    });

    // Update tagline
    document.querySelectorAll('.footer-tagline').forEach(el => {
        el.textContent = SITE_CONFIG.tagline;
    });
});
