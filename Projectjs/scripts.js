
        // MOBILE MENU TOGGLE
        // Toggles the mobile navigation menu when the hamburger button is clicked
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // FAQ ACCORDION
        // Expands/collapses FAQ answers when questions are clicked
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = answer.classList.contains('active');
                
                // Close all answers first
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                
                // Toggle current answer if not already open
                if (!isOpen) {
                    answer.classList.add('active');
                }
            });
        });

        // SMOOTH SCROLLING
        // Provides smooth scrolling for anchor links
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
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });

        // FORM SUBMISSION
        // Handles form submission (simulated in this example)
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
