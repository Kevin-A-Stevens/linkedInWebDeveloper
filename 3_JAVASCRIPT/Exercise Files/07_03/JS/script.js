
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
CTA.classList.add("hide");

function reveal(e) {
  e.preventDefault();   /* Prevents moving to top of page on click */
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;
