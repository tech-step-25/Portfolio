const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const showIcons = document.querySelectorAll(".show-icon");
const fadeUpEls = document.querySelectorAll(".fade-up");
const fadeInEls = document.querySelectorAll(".fade-in");
const fadeDownEls = document.querySelectorAll(".fade-down");

barIcon.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    links.classList.toggle("flex");
    links.classList.toggle("hidden");
     barIcon.setAttribute(
    "aria-expanded",
    barIcon.getAttribute("aria-expanded") == "false" ? "true" : "false"
  );
  }
});

showIcons.forEach((element) => {
  element.addEventListener("click", () => {
    const targetId = element.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.toggle("hidden");
        element.setAttribute(
      "aria-expanded",
      element.getAttribute("aria-expanded") == "false" ? "true" : "false"
    );
    }
  });
});

function checkTransformView(eles, move) {
  eles.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add(move);
    } else {
      el.classList.remove(move);
    }
  });
}

window.addEventListener("scroll", () => {
  checkTransformView(fadeUpEls, "fade-up");
  checkTransformView(fadeInEls, "fade-in");
  checkTransformView(fadeDownEls, "fade-down");
});
