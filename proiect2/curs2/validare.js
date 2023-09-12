

// JavaScript pentru gestionarea procesului de înregistrare
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Opriți trimiterea formularului implicită
    
    // Aici puteți adăuga codul de validare și procesare a datelor de înregistrare
    (function () {
        'use strict'
        const forms = document.querySelectorAll('.requires-validation')
        Array.from(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
    
                    form.classList.add('was-validated')
                }, false)
            })
    })()

    
    // Redirecționați utilizatorul către pagina de magazin
    window.location.href = "magazin.html";
});