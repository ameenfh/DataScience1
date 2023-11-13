// JavaScript source code

window.addEventListener('scroll', function() {
    var image = document.getElementById('picture');
    var currentScrollPos = window.scrollY;

    if (currentScrollPos > 1000 && currentScrollPos <= 2000) {
        image.src = 'second.png';
        }
    else if (currentScrollPos < 1000){
        image.src = 'mars.png';
    }
    else if (currentScrollPos > 2000){
        image.src = 'third.png';
    }
});