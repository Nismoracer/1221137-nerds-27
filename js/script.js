let art1 = document.querySelector(".article1");
let art2 = document.querySelector(".article2");
let art3 = document.querySelector(".article3");

let writeus = document.querySelector(".map-button");
let popup = document.querySelector(".modal");
let closeBut = document.querySelector(".modal-close");

writeus.addEventListener("click", function(evt)     {
    evt.preventDefault();
    popup.classList.add("element-show");
    popup.classList.add("modal-animation");
});

closeBut.addEventListener("click", function()     {
    popup.classList.remove("element-show");
    popup.classList.remove("modal-animation");
    popup.classList.add("element-hide");
});

function currentSlide(n)    {
    if (n === 1)
    {
        art1.style.display = "block";
        art2.style.display = "none";
        art3.style.display = "none";
    }
    if (n === 2)
    {
        art1.style.display = "none";
        art2.style.display = "block";
        art3.style.display = "none";
    }
    if (n === 3)
    {
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "block";
    }
}