document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formSend = document.getElementById("form-message");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const linkAbout = document.getElementById("button-about");
  const linkprojects = document.getElementById("button-projects");
  const downloadCv = document.getElementById("button-cv");
  const downloadLink = document.getElementById("download-link");

  if (form && formSend) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formSend.textContent = "Merci ! Votre message à bien été envoyé.";
    });
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  linkAbout.addEventListener("click", () => {
    window.location.href = "./pages/about.html";
  });

  linkprojects.addEventListener("click", () => {
    window.location.href = "./pages/portfolio.html";
  });

  downloadCv.addEventListener("click", () => {
    downloadLink.click();
  });
});
