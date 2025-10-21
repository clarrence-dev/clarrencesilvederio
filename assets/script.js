document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector(".arrow");
  
    if (arrow) {
      arrow.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(arrow.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
  });
  