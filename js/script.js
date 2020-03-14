let art1 = document.querySelector(".article1");
let art2 = document.querySelector(".article2");
let art3 = document.querySelector(".article3");

let writeus = document.querySelector(".map-button");
let popup = document.querySelector(".modal");
let closeBut = document.querySelector(".modal-close");
var form = popup.querySelector('form');
var surname = popup.querySelector('.feedback-form input[name=surname]');
var email = popup.querySelector('.feedback-form input[name=email]');
var letter = popup.querySelector('.feedback-form textarea[name=letter]');

var isStorageSupport = true;
var storSurname = '';
var storEmail = '';

try {
    storSurname = localStorage.getItem('surname');
    storEmail = localStorage.getItem('email');
}   catch (err)     {
    isStorageSupport = false;
}

writeus.addEventListener("click", function(evt)     {
    evt.preventDefault();
    popup.classList.add("element-show");
    popup.classList.add("modal-animation");
    surname.style.border = '2px solid #e1e1e1';
    letter.style.border = '2px solid #e1e1e1';
    if (storSurname)    {
        surname.value = storSurname;
        email.value = storEmail;
    }
});

closeBut.addEventListener("click", function(evt)     {
    console.log('yo~');
    evt.preventDefault();
    popup.classList.remove('element-show');
    popup.classList.remove('modal-animation');
    popup.classList.add('element-hide');
    surname.value = '';
    email.value  = ''
    letter.value  = '';
});

window.addEventListener('keydown', function(evt)    {
    if (evt.keyCode == 27)  {
        evt.preventDefault();
        if (popup.classList.contains('element-show'))    {
            popup.classList.remove('element-show'); 
            popup.classList.remove('element-hide'); 
        }
        surname.value  = '';
        email.value  = ''
        letter.value  = '';
    }
    if (surname.value)  {
        surname.style.border = '2px solid #e1e1e1';
    }
    if (letter.value)  {
        letter.style.border = '2px solid #e1e1e1';
    }
});

form.addEventListener('submit', function(evt)  {
    if (!surname.value || !letter.value)    {
    evt.preventDefault();
    surname.style.border = "2px solid #e1e1e1";
    letter.style.border = "2px solid #e1e1e1";
        if (!surname.value)   {
        surname.style.border = '2px solid #e74246';
        }
        if (!letter.value)    {
        letter.style.border = '2px solid #e74246';
        }
    }
    else {
        if (isStorageSupport)   {
        localStorage.setItem('surname', surname.value);
        localStorage.setItem('email', email.value);
        }
    }
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