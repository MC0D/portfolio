const form = document.getElementById("contact-form");
const formSend = document.getElementById("form-message");

form.addEventListener("submit", () => {
  formSend.textContent = "Merci ! Votre message à bien été envoyé.";
});
