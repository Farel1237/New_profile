const toggle = document.getElementById("toggle");
const ul = document.getElementById("ul");
const hamburger = document.getElementById("hamburger");
const clos = document.getElementById("clos");
const btn = document.getElementById("submit");
toggle.addEventListener("click", function () {
  ul.classList.toggle("translate-x-96");
  if (ul.classList.contains("translate-x-96") == false) {
    hamburger.classList.add("hidden");
    clos.classList.remove("hidden");
  } else {
    hamburger.classList.remove("hidden");
    clos.classList.add("hidden");
  }
});

btn.addEventListener("click", function () {
  alert("Maaf Form ini belum Berfungsi");
});
