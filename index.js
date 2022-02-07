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

// Menu shrink Js
window.onscroll = ()=> {
  if (document.body.scrollTop > 93 || document.documentElement.scrollTop > 80) {
    document.getElementById("ncc-heading").style.display = "none";
    document.getElementById("NCC-Logo").classList.add("ncc_shrink");
    document.getElementById("IITR-Logo").classList.add("iitr_shrink");
    document.getElementById("navbar_links").classList.add("navbar_shrink");
  } else {
    document.getElementById("ncc-heading").style.display = "block";
    document.getElementById("NCC-Logo").classList.remove("ncc_shrink");
    document.getElementById("IITR-Logo").classList.remove("iitr_shrink");
    document.getElementById("navbar_links").classList.remove("navbar_shrink");
  }
}
// Footer JS
const footer = (id, icon) => {
  var element = document.getElementById(id);

  if (icon.classList.contains("fa-plus")) {
    icon.classList.replace("fa-plus", "fa-minus");
  } else icon.classList.replace("fa-minus", "fa-plus");
  element.classList.toggle(id + "_0");
};
