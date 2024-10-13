document.addEventListener("DOMContentLoaded", () => {
    // Constants for sections, cards, and list items
    const sections = ['gnosis', 'archons'];
    const cards = {
        'Gnosis': ['Nivalis', 'Anemo', 'Geo', 'Electro', 'Dendro', 'Hydro', 'Pyro', 'Cryo'],
        'Archons': ['Yuki', 'Barbatos', 'Morax', 'Raiden', 'Nahida', 'Focalors', 'Murata', 'Tsaritsa'],
        // Add more sections and corresponding card IDs as needed
    };
    const defaultCards = {
        'gnosis': 'Nivalis',
        'archons': 'Yuki'
    };

    // Function to switch between sections
    function switchSection(sectionId) {
        // Hide all sections
        document.querySelectorAll(".section").forEach(section => {
            section.classList.remove("active");
        });

        // Show the selected section
        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            targetSection.classList.add("active");
            console.log(`Switched to section: ${sectionId}`);
        } else {
            console.error(`Section not found: ${sectionId}`);
        }
    }

    // Function to switch cards within a section based on the selected navigation item
    function switchCard(selectedId, section) {
        console.log(`Switching card: ${selectedId} in section: ${section}`);

        // Select all cards and navigation items within the section
        const allCards = document.querySelectorAll(`.cartao-${section}`);
        const allNavItems = document.querySelectorAll(`.${section}`);

        // Loop through all cards
        allCards.forEach(card => {
            if (card.id === `cartao-${selectedId}`) {
                // Show the selected card
                card.classList.add('aberto');
                console.log(`Showing card: ${card.id}`);
            } else {
                // Hide other cards
                card.classList.remove('aberto');
                console.log(`Hiding card: ${card.id}`);
            }
        });

        // Loop through all navigation items
        allNavItems.forEach(item => {
            if (item.id === selectedId) {
                // Set the selected navigation item as active
                item.classList.add('ativo');
                console.log(`Active nav item: ${item.id}`);
            } else {
                // Remove active state from other items
                item.classList.remove('ativo');
            }
        });
    }

    // Attach event listeners for section navigation
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = button.getAttribute("data-section");
            if (targetSection) {
                switchSection(targetSection);
                // Reset to the first card of the new section
                const firstCardId = defaultCards[targetSection] || ''; // Get the default card for the section
                if (firstCardId) {
                    switchCard(firstCardId, targetSection.charAt(0).toUpperCase() + targetSection.slice(1));
                }
            } else {
                console.error('No target section specified');
            }
        });
    });

    // Attach event listeners for each list item
    Object.keys(cards).forEach(section => {
        const listItems = cards[section];
        listItems.forEach(itemId => {
            document.getElementById(itemId).addEventListener("click", () => {
                switchCard(itemId, section);
            });
        });
    });

    // Initialize by showing the first section and the first card in each section
    switchSection('gnosis');
    switchCard(defaultCards['gnosis'], 'Gnosis');  // First card in the Gnosis section
    switchCard(defaultCards['archons'], 'Archons');  // First card in the Archons section
});