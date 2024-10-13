const config = {
    redirectUrl: './src/html/gnosis.html', // The URL to redirect to
    keyEvent: 'keydown', // The event type to listen for on desktop
    touchEvent: 'touchstart' // The event type to listen for on mobile
};

// Function to handle redirection with a smooth transition
function handleRedirection() {
    // Add transition effect
    document.body.classList.add('fade-out');
    
    // Wait for the transition to complete before redirecting
    setTimeout(() => {
        window.location.href = config.redirectUrl;
    }, 300); // Match this timeout with the CSS transition duration
}

// Detect if the user is on a mobile device or a desktop
const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
};

// Add appropriate event listeners based on the device type
if (isMobile()) {
    // Event listener for touch events on mobile devices
    document.addEventListener(config.touchEvent, handleRedirection);
} else {
    // Event listener for keyboard events on desktop
    document.addEventListener(config.keyEvent, handleRedirection);
}

// Adding a fade-in effect to the body
document.body.classList.add('fade-in');

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-in'); // Remove fade-in after page load
});
