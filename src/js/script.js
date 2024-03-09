const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    overlay.classList.toggle("overlay_active");
});
overlay.addEventListener("click", ()=>{
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    overlay.classList.toggle("overlay_active");
})



