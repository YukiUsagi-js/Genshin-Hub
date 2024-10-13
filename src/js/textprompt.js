const config = {
    redirectUrl: './src/html/gnosis.html', // The URL to redirect to
    keyEvent: 'keydown', // The event type to listen for (click, keydown, etc.)
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

// Event listener for clicks on the document
document.addEventListener(config.clickEvent, handleRedirection);

// Event listener for keyboard events
document.addEventListener(config.keyEvent, handleRedirection);

// Adding a fade-out effect to the body
document.body.classList.add('fade-in');

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-in'); // Remove fade-in after page load
});