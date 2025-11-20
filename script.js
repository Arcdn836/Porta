function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 72;
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

function toggleNav() {
  const navList = document.querySelector('nav ul');
  const navToggle = document.querySelector('.nav-toggle');
  
  navList.classList.toggle('nav-open');
  navToggle.classList.toggle('active');
  
  // Cerrar el menú al hacer click en un enlace
  if (navList.classList.contains('nav-open')) {
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('nav-open');
        navToggle.classList.remove('active');
      });
    });
  }
}

function handleContactSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");
  const status = document.getElementById("contact-status");
  const submitButton = document.getElementById("contact-submit");

  errorName.classList.remove("visible");
  errorEmail.classList.remove("visible");
  errorMessage.classList.remove("visible");
  status.style.display = "none";

  let hasError = false;

  if (!nameInput.value || nameInput.value.trim().length < 2) {
    errorName.classList.add("visible");
    hasError = true;
  }

  const emailValue = emailInput.value.trim();
  if (!emailValue || !emailValue.includes("@") || !emailValue.includes(".")) {
    errorEmail.classList.add("visible");
    hasError = true;
  }

  if (!messageInput.value || messageInput.value.trim().length < 10) {
    errorMessage.classList.add("visible");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  submitButton.classList.add("btn-disabled");
  submitButton.textContent = "Enviado (demo)";

  status.textContent = "Esto es una demo: aquí podrías integrar un backend o servicio de correo.";
  status.style.display = "block";
}

// Animaciones al hacer scroll (Intersection Observer)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);

  // Observar elementos para animaciones
  const animatedElements = document.querySelectorAll('.project-card, .skills-card, .about-card, .section-title, .section-subtitle');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Inicializar animaciones cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  
  // Animación de typing para el hero
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.style.animationDelay = '0.5s';
  }
});