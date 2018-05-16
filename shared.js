// TOGGLEBUTTON
var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//CARD EXPAND AND COLLAPSE
var expandBtn = document.getElementsByClassName('button1');
var cardDescription = document.querySelector('.main-content__description')

// TOGGLEBUTTON
toggleButton.addEventListener('click', openBackdrop);
backdrop.addEventListener('click', closeBackdrop);



function closeBackdrop() {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
}

function openBackdrop() {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
}

//CARD EXPAND AND COLLAPSE
for (var i = 0; i < expandBtn.length; i++) {
    document.getElementsByClassName('button1')[i].addEventListener('click', function () { //GET INDEX OF BTN
        var index = this.getAttribute('data-id');
      
        var display = document.getElementsByClassName('main-content__description')[index];

        if (display.style.display == "none" || display.style.display == '') { //CHECK DISPLAY VALUE
            display.style.display = 'block';
        } else {
            display.style.display = 'none';
        }
    })
}



