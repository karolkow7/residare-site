
// Parallax-Effekt auf Text
window.addEventListener("scroll", function () {
  const text = document.querySelector(".hero-content");
  const offset = window.pageYOffset;
  text.style.transform = `translateY(${offset * 0.4}px)`;
});
