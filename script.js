document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission (no server yet)
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-response').textContent = 'Thanks for your message, ' + name + '! (This is a simulation)';
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        document.getElementById('form-response').textContent = 'Please fill out all fields.';
    }
const toggleButton = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    toggleButton.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️ Light Mode';
}

toggleButton.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    toggleButton.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});
});
