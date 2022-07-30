const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= headerHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

const reveal = `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #contact .text, #contact .links,
  footer .brand, footer .social
`;

scrollReveal.reveal(reveal, { interval: 100 });

const backToTopButton = document.querySelector(".back-to-top");

function showBackToTopButtonWhenScroll() {
  if (window.scrollY >= 560) backToTopButton.classList.add("show");
  else backToTopButton.classList.remove("show");
}

const sections = document.querySelectorAll("main section[id]");

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const startCheckpoint = checkpoint >= sectionTop;
    const endCheckpoint = checkpoint <= sectionTop + sectionHeight;

    if (startCheckpoint && endCheckpoint) {
      document.querySelector("nav ul li a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav ul li a[href*=" + sectionId + "]").classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  showBackToTopButtonWhenScroll();
  activateMenuAtCurrentSection();
});
