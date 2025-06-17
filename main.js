// Définir l'année courante dans le footer
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année du copyright
    const yearElements = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(function(element) {
        element.textContent = currentYear;
    });
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            // Validation simple
            if (!name || !email || !subject || !message) {
                showFormResponse('Veuillez remplir tous les champs du formulaire.', 'error');
                return;
            }
            // Simuler l'envoi du formulaire (remplacer par un vrai envoi)
            setTimeout(function() {
                showFormResponse('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.', 'success');
                contactForm.reset();
            }, 1000);
        });
    }
    // Fonction pour afficher la réponse du formulaire
    function showFormResponse(message, type) {
        const responseElement = document.getElementById('form-response');
        if (responseElement) {
            responseElement.textContent = message;
            responseElement.className = 'form-response ' + type;
            
            // Faire défiler vers la réponse
            responseElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // Animation de la navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.transition = 'background-color 0.3s, transform 0.2s';
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    // Mettre en évidence le lien actif dans la barre latérale
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const currentUrl = window.location.href;
    
    sidebarLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
// Transition de page
window.addEventListener('pageshow', function(event) {
    document.body.classList.add('fade-in');
});
// Animation de défilement doux
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({