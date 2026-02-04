/* =========================
   FAQ ACCORDION TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });

  /* =========================
     PHOTO SCROLL BUTTONS
  ========================= */

  const scrollContainer = document.querySelector(".photo-scroll");

  document.getElementById("scroll-left")?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  document.getElementById("scroll-right")?.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
});
