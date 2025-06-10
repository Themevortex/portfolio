const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const overlay = document.getElementById("nav-overlay");
const navLinks = document.querySelectorAll(".nav-links a");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("show");
  overlay.classList.toggle("show");
};

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
      toggleMenu();
    }
  });
});

new Swiper(".testimonial-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  breakpoints: {
    375: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 20,
  grabCursor: true,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percentage = progressBar.getAttribute("data-percentage");
          setTimeout(() => {
            progressBar.style.width = percentage + "%";
          }, 300);
        }
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach((bar) => observer.observe(bar));
}

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      projects.forEach((project) => {
        const category = project.getAttribute("data-category");

        if (filterValue === "all" || filterValue === category) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
  animateProgressBars();
});
