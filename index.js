// Loader Js
function load() {
  document.getElementById("loading").style.display = "none";
}

// -----Menu JS
const toggle = document.querySelector(".toggle-icon");
const box = document.querySelector(".box");
const trigg = document.querySelector(".hamburger");
toggle.onclick = (e) => {
  trigg.classList.toggle("is-active");
  box.classList.toggle("collapsed");
};
// Footer JS
const footer = (id, icon) => {
  var element = document.getElementById(id);

  if (icon.classList.contains("fa-plus")) {
    icon.classList.replace("fa-plus", "fa-minus");
  } else icon.classList.replace("fa-minus", "fa-plus");
  element.classList.toggle(id + "_0");
};
