const face = document.getElementById("face");
const fire = document.getElementById("fire");
const cake = document.getElementById("cake");
const card = document.getElementById("card");
const clickMe = document.getElementById("clickMe");

face.addEventListener("mouseenter", () => {
    fire.classList.remove("animate-fire--move");
    fire.classList.add("animate-fire--down");
});
face.addEventListener("mouseleave", () => {
    fire.classList.remove("animate-fire--down");
    fire.classList.add("animate-fire--move");
});

clickMe.addEventListener("click", () => {
    face.style.display = "none";
    cake.style.display = "none";
    card.style.display = "flex";
});
