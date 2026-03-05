// === Contact Form Handling ===
const contactForm = document.getElementById('contact-form');
const responseEl = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            responseEl.textContent = `Thanks for your message, ${name}! (This is a simulation)`;
            responseEl.style.color = 'var(--accent)'; // Use theme accent color
            responseEl.style.opacity = '1';

            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                responseEl.style.opacity = '0';
                setTimeout(() => { responseEl.textContent = ''; }, 400);
            }, 5000);
        } else {
            responseEl.textContent = 'Please fill out all fields.';
            responseEl.style.color = '#ef4444'; // Red for error
            responseEl.style.opacity = '1';
        }
    });
}

// === Dark/Light Mode Toggle ===
const toggleButton = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

if (toggleButton) {
    // Load saved or system preference on page load
    let currentTheme = localStorage.getItem('theme');
    
    if (!currentTheme) {
        // Respect user's OS preference if no saved choice
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    htmlEl.setAttribute('data-theme', currentTheme);
    toggleButton.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    // Toggle on click
    toggleButton.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        toggleButton.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}
#form-response {
    margin-top: 1rem;
    font-weight: 500;
    min-height: 1.4rem;
    opacity: 0;
    transition: opacity 0.4s ease;
}

[data-theme="light"] #form-response {
    color: #166534; /* Dark green for success in light mode */
}

[data-theme="dark"] #form-response {
    color: #6ee7b7; /* Light green/teal for success in dark mode */
}
