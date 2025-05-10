document.addEventListener('DOMContentLoaded', function() {
    // Get lottie-player element if it exists
    const lottiePlayer = document.querySelector('lottie-player');
    if (lottiePlayer) {
        // Animation is loaded by the web component automatically
        lottiePlayer.addEventListener('load', () => {
            console.log('Lottie animation loaded successfully');
        });
        
        lottiePlayer.addEventListener('error', () => {
            console.log('Error loading Lottie animation');
        });
    }
    // Initialize Lottie animation
    
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const accessForm = document.getElementById('access-form');
    if (accessForm) {
        accessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value
            };
            
            // Normally you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            accessForm.innerHTML = `
                <div class="form-success">
                    <img src="assets/icon-check.svg" alt="Success">
                    <h3>Request Received!</h3>
                    <p>Thank you for your interest in OmniTest. We'll be in touch soon with more information.</p>
                </div>
            `;
        });
    }
});

