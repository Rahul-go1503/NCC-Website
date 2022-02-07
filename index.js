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
    document.getElementById("NCC-Logo").style.height = "70px";
    document.getElementById("IITR-Logo").style.alignSelf = "center";
    document.getElementById("navbar_links").style.height = "100px";
  } else {
    document.getElementById("navbar_links").style.height = "150px";
    document.getElementById("ncc-heading").style.display = "block";
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
