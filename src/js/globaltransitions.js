(function() {
    // Function to add fade-out effect
    const fadeOut = () => {
        document.body.classList.add('fade-out');
        document.body.classList.remove('fade-in'); // Ensure fade-in is removed before fading out
        document.querySelector('.main-content').style.opacity = '0'; // Hide main content
    };

    // Function to remove the fade-out class after the transition
    const onFadeOutComplete = (url) => {
        setTimeout(() => {
            window.location.href = url; // Navigate to the target URL
        }, 500); // Match this with the duration of the fade-out
    };

    // Function to handle link clicks
    const handleLinkClick = (event) => {
        const target = event.target.closest('a'); // Find the closest anchor tag
        if (target && target.href) {
            event.preventDefault(); // Prevent default link behavior
            fadeOut(); // Start the fade-out animation
            onFadeOutComplete(target.href); // Navigate to the new page after fade-out
        }
    };

    // Function to handle initial load
    const handleInitialLoad = () => {
        document.body.classList.add('fade-in'); // Add fade-in effect
        setTimeout(() => {
            document.body.classList.remove('fade-in'); // Remove fade-in class after transition
        }, 500); // Match this with the duration of the fade-in
    };

    // Initialize the page transitions
    const initPageTransitions = () => {
        // Attach the click event listener to the document
        document.addEventListener('click', handleLinkClick);

        // Handle the initial load
        document.addEventListener('DOMContentLoaded', handleInitialLoad);
    };

    // Run the initialization function
    initPageTransitions();
})();
