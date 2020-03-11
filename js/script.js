
var art1 = document.querySelector(".article1");
var art2 = document.querySelector(".article2");
var art3 = document.querySelector(".article3");

function currentSlide(n)    {
    if (n == 1)
    {
        art1.style.display = "block";
        art2.style.display = "none";
        art3.style.display = "none";
    }
    if (n == 2)
    {
        art1.style.display = "none";
        art2.style.display = "block";
        art3.style.display = "none";
    }
    if (n == 3)
    {
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "block";
    }
    
}