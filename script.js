let openQbox = document.querySelector(".open-q-box");
let ansBox = document.querySelector(".ans-box");
let qBox = document.querySelector(".q-box");
let qHeading = document.querySelector("q-heading");


openQbox.addEventListener("click", ()=>{
    ansBox.classList.toggle("show-ans")
    // qBox.style.height = "6rem";
    qBox.classList.toggle("qbox-width")
    qHeading.style.display = "none";

})

