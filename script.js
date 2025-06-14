document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formSend = document.getElementById("form-message");

  if (form && formSend) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formSend.textContent = "Merci ! Votre message à bien été envoyé.";
    });
  }

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
