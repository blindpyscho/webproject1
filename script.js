const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const filterButtons = document.querySelectorAll(".filter-buttons button");
console.log(filterButtons)
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    console.log(filter)

    cards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});