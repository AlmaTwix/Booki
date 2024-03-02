document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const formData = new FormData(contactForm);

        fetch("Contact.php", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la requête.");
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                statusMessage.innerHTML = "Mail envoyé avec succès!";
                statusMessage.style.color = "green";
            } else {
                statusMessage.innerHTML = "Problème lors de l'envoi du mail.";
                statusMessage.style.color = "red";
            }
        })
        .catch(error => {
            console.error(error);
        });
    });
});
