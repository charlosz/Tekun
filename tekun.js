// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));


const lazyImages = document.querySelectorAll("img[data-src]");

const lazyLoad = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => lazyLoad.observe(img));


function contato() {
  window.location.href = "https://wa.me/5519991555213";
}

function email() {
  window.location.href = "mailto:rafael.freitas.silva@tekun.com.br";
}

function instagram() {
  window.location.href = "https://instagram.com/tekun_solucoes";
}
